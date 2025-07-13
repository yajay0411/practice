import React, { useMemo, useCallback } from "react";

// Enhanced type system with better extensibility
type AsidePosition = "Left" | "Right" | "Top" | "Bottom";
type LayoutStrategy = "grid" | "flex";

interface AsideConfig {
  position: AsidePosition;
  content: React.ReactNode;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  className?: string;
  key?: React.Key;
  show?: boolean;
  priority?: number; // For ordering within same position
}

interface LayoutContext {
  positions: Set<AsidePosition>;
  hasTop: boolean;
  hasBottom: boolean;
  hasLeft: boolean;
  hasRight: boolean;
  strategy: LayoutStrategy;
}

// Strategy Pattern: Decoupled layout generators
abstract class LayoutGenerator {
  abstract generateContainerStyle(context: LayoutContext): React.CSSProperties;
  abstract generateAsideStyle(
    position: AsidePosition,
    config: Partial<AsideConfig>
  ): React.CSSProperties;
}

class GridLayoutGenerator extends LayoutGenerator {
  // Memoized grid template cache for performance
  private static templateCache = new Map<string, string>();

  generateContainerStyle(context: LayoutContext): React.CSSProperties {
    const { hasTop, hasBottom, hasLeft, hasRight } = context;

    // Generate cache key for memoization
    const cacheKey = `${hasTop}-${hasBottom}-${hasLeft}-${hasRight}`;

    if (!GridLayoutGenerator.templateCache.has(cacheKey)) {
      const template = this.computeGridTemplate(context);
      GridLayoutGenerator.templateCache.set(cacheKey, template);
    }

    return {
      display: "grid",
      width: "100%",
      height: "100%",
      minHeight: 0,
      minWidth: 0,
      ...this.getGridConfiguration(context),
    };
  }

  private computeGridTemplate(context: LayoutContext): string {
    const { hasTop, hasBottom, hasLeft, hasRight } = context;

    // Dynamic grid template generation
    const rows = [hasTop && "auto", "1fr", hasBottom && "auto"].filter(Boolean);

    const columns = [hasLeft && "auto", "1fr", hasRight && "auto"].filter(
      Boolean
    );

    return `${rows.join(" ")} / ${columns.join(" ")}`;
  }

  private getGridConfiguration(context: LayoutContext): React.CSSProperties {
    const { hasTop, hasBottom, hasLeft, hasRight } = context;

    // Configuration lookup table - more maintainable than switch statements
    const gridConfigs = {
      [this.getConfigKey(hasTop, hasBottom, hasLeft, hasRight)]: {
        gridTemplateRows: this.getRowTemplate(hasTop, hasBottom),
        gridTemplateColumns: this.getColumnTemplate(hasLeft, hasRight),
        gridTemplateAreas: this.getAreaTemplate(
          hasTop,
          hasBottom,
          hasLeft,
          hasRight
        ),
      },
    };

    const key = this.getConfigKey(hasTop, hasBottom, hasLeft, hasRight);
    return gridConfigs[key] || this.getDefaultGridConfig();
  }

  private getConfigKey(
    top: boolean,
    bottom: boolean,
    left: boolean,
    right: boolean
  ): string {
    return `${top ? "T" : ""}${bottom ? "B" : ""}${left ? "L" : ""}${
      right ? "R" : ""
    }`;
  }

  private getRowTemplate(hasTop: boolean, hasBottom: boolean): string {
    return [hasTop && "auto", "1fr", hasBottom && "auto"]
      .filter(Boolean)
      .join(" ");
  }

  private getColumnTemplate(hasLeft: boolean, hasRight: boolean): string {
    return [hasLeft && "auto", "1fr", hasRight && "auto"]
      .filter(Boolean)
      .join(" ");
  }

  private getAreaTemplate(
    top: boolean,
    bottom: boolean,
    left: boolean,
    right: boolean
  ): string {
    const areas = [];

    if (top) areas.push(`"${left ? "top" : ""} top ${right ? "top" : ""}"`);
    areas.push(`"${left ? "left" : ""} main ${right ? "right" : ""}"`);
    if (bottom)
      areas.push(`"${left ? "bottom" : ""} bottom ${right ? "bottom" : ""}"`);

    return areas.join(" ");
  }

  private getDefaultGridConfig(): React.CSSProperties {
    return {
      gridTemplateRows: "1fr",
      gridTemplateColumns: "1fr",
      gridTemplateAreas: '"main"',
    };
  }

  generateAsideStyle(
    position: AsidePosition,
    config: Partial<AsideConfig>
  ): React.CSSProperties {
    // Lookup table for position-based styles
    const positionStyles: Record<AsidePosition, React.CSSProperties> = {
      Left: {
        width: config.width || "250px",
        height: "100%",
        gridArea: "left",
      },
      Right: {
        width: config.width || "250px",
        height: "100%",
        gridArea: "right",
      },
      Top: {
        width: "100%",
        height: config.height || "120px",
        gridArea: "top",
      },
      Bottom: {
        width: "100%",
        height: config.height || "120px",
        gridArea: "bottom",
      },
    };

    return {
      position: "relative",
      ...positionStyles[position],
      ...config.style,
    };
  }
}

class FlexLayoutGenerator extends LayoutGenerator {
  generateContainerStyle(context: LayoutContext): React.CSSProperties {
    const { hasTop, hasBottom } = context;

    // Determine flex direction based on primary axis
    const isVerticalPrimary = hasTop || hasBottom;
    // const isHorizontalPrimary = hasLeft || hasRight;

    return {
      display: "flex",
      flexDirection: isVerticalPrimary ? "column" : "row",
      width: "100%",
      height: "100%",
    };
  }

  generateAsideStyle(
    position: AsidePosition,
    config: Partial<AsideConfig>
  ): React.CSSProperties {
    const baseStyle: React.CSSProperties = {
      position: "relative",
      flexShrink: 0,
    };

    // Position-specific configurations
    const positionConfigs: Record<AsidePosition, React.CSSProperties> = {
      Left: { width: config.width || "250px", height: "100%", order: 0 },
      Right: { width: config.width || "250px", height: "100%", order: 2 },
      Top: { width: "100%", height: config.height || "120px", order: 0 },
      Bottom: { width: "100%", height: config.height || "120px", order: 2 },
    };

    return {
      ...baseStyle,
      ...positionConfigs[position],
      ...config.style,
    };
  }
}

// Factory Pattern: Strategy selection
class LayoutStrategyFactory {
  private static strategies = new Map<LayoutStrategy, LayoutGenerator>([
    ["grid", new GridLayoutGenerator()],
    ["flex", new FlexLayoutGenerator()],
  ]);

  static getStrategy(strategy: LayoutStrategy): LayoutGenerator {
    const generator = this.strategies.get(strategy);
    if (!generator) {
      throw new Error(`Layout strategy "${strategy}" not found`);
    }
    return generator;
  }

  static registerStrategy(
    strategy: LayoutStrategy,
    generator: LayoutGenerator
  ): void {
    this.strategies.set(strategy, generator);
  }
}

// Custom hooks for separation of concerns
const useLayoutContext = (asides: AsideConfig[]): LayoutContext => {
  return useMemo(() => {
    const positions = new Set<AsidePosition>();
    asides.forEach((aside) => {
      if (aside.show !== false) {
        positions.add(aside.position);
      }
    });

    const hasTop = positions.has("Top");
    const hasBottom = positions.has("Bottom");
    const hasLeft = positions.has("Left");
    const hasRight = positions.has("Right");

    // Strategy selection based on complexity
    const strategy: LayoutStrategy =
      hasTop && hasBottom && hasLeft && hasRight
        ? "grid"
        : (hasTop || hasBottom) && (hasLeft || hasRight)
        ? "grid"
        : "flex";

    return { positions, hasTop, hasBottom, hasLeft, hasRight, strategy };
  }, [asides]);
};

const useGroupedAsides = (asides: AsideConfig[]) => {
  return useMemo(() => {
    const groups = {
      top: [] as AsideConfig[],
      left: [] as AsideConfig[],
      right: [] as AsideConfig[],
      bottom: [] as AsideConfig[],
    };

    asides
      .filter((aside) => aside.show !== false)
      .sort((a, b) => (a.priority || 0) - (b.priority || 0))
      .forEach((aside) => {
        switch (aside.position) {
          case "Top":
            groups.top.push(aside);
            break;
          case "Left":
            groups.left.push(aside);
            break;
          case "Right":
            groups.right.push(aside);
            break;
          case "Bottom":
            groups.bottom.push(aside);
            break;
        }
      });

    return groups;
  }, [asides]);
};

// Component with advanced optimization
interface AsideLayoutProps {
  children: React.ReactNode;
  options: {
    asides: AsideConfig[];
    className?: string;
    style?: React.CSSProperties;
    strategy?: LayoutStrategy;
  };
}

const AsideLayout: React.FC<AsideLayoutProps> = React.memo(
  ({ children, options }) => {
    const { asides, className, style, strategy: preferredStrategy } = options;

    // Early return optimization
    const visibleAsides = useMemo(
      () => asides.filter((aside) => aside.show !== false),
      [asides]
    );

    // Move all hooks before any conditional returns
    const layoutContext = useLayoutContext(visibleAsides);
    const groupedAsides = useGroupedAsides(visibleAsides);

    // Use preferred strategy or auto-selected strategy
    const effectiveStrategy = preferredStrategy || layoutContext.strategy;
    const layoutGenerator =
      LayoutStrategyFactory.getStrategy(effectiveStrategy);

    // Memoized style generation
    const containerStyle = useMemo(
      () => layoutGenerator.generateContainerStyle(layoutContext),
      [layoutGenerator, layoutContext]
    );

    // Memoized aside renderer
    const renderAsides = useCallback(
      (asidesArray: AsideConfig[]) =>
        asidesArray.map((aside, idx) => (
          <aside
            key={aside.key ?? `${aside.position}-${idx}`}
            className={aside.className}
            style={layoutGenerator.generateAsideStyle(aside.position, aside)}
          >
            {aside.content}
          </aside>
        )),
      [layoutGenerator]
    );

    if (visibleAsides.length === 0) {
      return (
        <div className={className} style={style}>
          {children}
        </div>
      );
    }

    // Render based on strategy
    if (effectiveStrategy === "grid") {
      return (
        <div className={className} style={{ ...containerStyle, ...style }}>
          {groupedAsides.top.length > 0 && (
            <div style={{ gridArea: "top" }}>
              {renderAsides(groupedAsides.top)}
            </div>
          )}
          {groupedAsides.left.length > 0 && (
            <div style={{ gridArea: "left" }}>
              {renderAsides(groupedAsides.left)}
            </div>
          )}
          <main style={{ gridArea: "main", width: "100%", height: "100%" }}>
            {children}
          </main>
          {groupedAsides.right.length > 0 && (
            <div style={{ gridArea: "right" }}>
              {renderAsides(groupedAsides.right)}
            </div>
          )}
          {groupedAsides.bottom.length > 0 && (
            <div style={{ gridArea: "bottom" }}>
              {renderAsides(groupedAsides.bottom)}
            </div>
          )}
        </div>
      );
    }

    // Flex layout fallback
    const hasTopOrBottom =
      groupedAsides.top.length > 0 || groupedAsides.bottom.length > 0;

    return (
      <div className={className} style={{ ...containerStyle, ...style }}>
        {renderAsides(groupedAsides.top)}
        {hasTopOrBottom ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              width: "100%",
              height: "100%",
            }}
          >
            {renderAsides(groupedAsides.left)}
            <main style={{ flex: 1, width: "100%", height: "100%" }}>
              {children}
            </main>
            {renderAsides(groupedAsides.right)}
          </div>
        ) : (
          <>
            {renderAsides(groupedAsides.left)}
            <main style={{ flex: 1, width: "100%", height: "100%" }}>
              {children}
            </main>
            {renderAsides(groupedAsides.right)}
          </>
        )}
        {renderAsides(groupedAsides.bottom)}
      </div>
    );
  }
);

AsideLayout.displayName = "AsideLayout";

export default AsideLayout;
