searchState.loadedDescShard("dataviz", 0, "DataViz Library\nA structure representing a pixel-based drawing canvas.\nBackground color of the canvas (RGB format).\nBlends a pixel with the specified color and alpha value.\nBuffer storing pixel data as a linear array.\nClears the canvas by filling it with the background color.\nDraws a grid on the canvas.\nDraws a horizontal line at the specified y-coordinate.\nDraws a line with the specified type (solid, dashed, or …\nDraws a single pixel at the specified coordinates with the …\nDraws text at the specified position.\nDraws text vertically at the specified position.\nDraws a vertical line at the specified x-coordinate.\nReturns the argument unchanged.\nHeight of the canvas in pixels.\nCalls <code>U::from(self)</code>.\nMargin around the canvas (in pixels).\nCreates a new <code>PixelCanvas</code> with the specified dimensions, …\nSaves the current canvas as an image file.\nWidth of the canvas in pixels.\nA structure for creating and managing an SVG-based drawing …\nAdds a font style definition to the SVG canvas.\nBackground color of the SVG canvas.\nClears the SVG canvas by removing all elements and …\nDraws a circle on the SVG canvas.\nDraws a grid on the SVG canvas.\nAdds a line to the SVG canvas.\nAdds a line with RGB color to the SVG canvas.\nAdds a rectangle to the SVG canvas.\nAdds a text element to the SVG canvas.\nAdds a text element to the SVG canvas.\nA vector storing SVG elements as strings.\nReturns the argument unchanged.\nRetrieves the SVG content as a single string.\nHeight of the SVG canvas.\nCalls <code>U::from(self)</code>.\nMargin size for the SVG canvas.\nCreates a new <code>SvgCanvas</code> with the specified dimensions, …\nSaves the SVG content to a file.\nWidth of the SVG canvas.\nConfiguration structure for customizing the appearance of …\nColor of the axes in RGB format.\nBackground color of the figure in RGB format.\nColor of the grid lines in RGB format.\nColor of the title text in RGB format.\nProvides a default configuration for a figure.\nFile path to the font used for labels.\nFont size for axis labels.\nFont size for labels.\nFont size for the legend text.\nFont size for the title.\nFile path to the font used for the title.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nNumber of ticks along the axes.\nNumber of horizontal grid lines.\nNumber of vertical grid lines.\nA dataset for an area chart, containing data points, …\nTransparency level of the area fill (0.0 for fully …\nColor of the area fill in RGB format.\nReturns the argument unchanged.\nImplementation of the <code>Dataset</code> trait for <code>AreaChartDataset</code>.\nCalls <code>U::from(self)</code>.\nLabel for the dataset, used in legends or annotations.\nCreates a new <code>AreaChartDataset</code> instance with the specified …\nA collection of <code>(x, y)</code> data points for the area chart.\nA dataset for a bar chart, containing data points, …\nAdds a data point to the dataset.\nColor of the bars in RGB format.\nA collection of <code>(x, y)</code> data points where <code>x</code> is the category …\nReturns the argument unchanged.\nImplementation of the <code>Dataset</code> trait for <code>BarDataset</code>.\nCalls <code>U::from(self)</code>.\nLabel for the dataset, used in legends or annotations.\nCreates a new <code>BarDataset</code> instance with the specified label …\nA dataset for Cartesian graphs, representing data points …\nColor of the line in RGB format.\nReturns the argument unchanged.\nImplementation of the <code>Dataset</code> trait for <code>CartesianDataset</code>.\nCalls <code>U::from(self)</code>.\nLabel for the dataset, used in legends or annotations.\nStyle of the line (solid, dashed, dotted).\nCreates a new <code>CartesianDataset</code> instance with the specified …\nA collection of <code>(x, y)</code> data points for the Cartesian graph.\nA trait for managing datasets used in different types of …\nAdds a single point to the dataset.\nRetrieves all points in the dataset as a vector of <code>(x, y)</code> …\nA dataset for scatter graphs, representing points and …\nColor of the scatter points in RGB format.\nShape of the scatter points (circle, square, triangle, …\nReturns the argument unchanged.\nImplementation of the <code>Dataset</code> trait for <code>ScatterGraphDataset</code>…\nCalls <code>U::from(self)</code>.\nLabel for the dataset, used in legends or annotations.\nCreates a new <code>ScatterGraphDataset</code> instance with the …\nA collection of <code>(x, y)</code> data points for the scatter graph.\nA trait for plots that support hover functionality, …\nFinds the closest point to the mouse position on the plot.\nRetrieves the font used for hover text rendering.\nHandles hover functionality and returns an updated buffer …\nConverts plot coordinates into canvas pixel coordinates.\nA utility struct for managing window operations and …\nDisplays a plot in an interactive window with hover …\nDisplays a plot in real-time with continuous updates.\nDisplays an SVG image in a window.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>Winop</code> instance.\nA trait for rendering charts and graphs, supporting …\nDraws the main content of the plot on a <code>PixelCanvas</code>.\nDraws an axis line on the canvas.\nDraws a value on the axis (tick label) based on its type.\nDraws the grid for the plot based on the provided …\nDraws a text label on the canvas.\nDraws the legend for the plot on a <code>PixelCanvas</code>.\nDraws the plot content on an <code>SvgCanvas</code>.\nDraws the plot title on the canvas.\nAn area chart, which represents data with filled areas …\nA Cartesian graph, which plots points and lines on a …\nA factory for creating various types of plots.\nRepresents the types of plots that can be created.\nA group horizontal bar chart, which uses rectangular bars …\nA group vertical bar chart, which uses rectangular bars to …\nA histogram, which shows the frequency distribution of …\nRepresents the output format for the generated plots.\nA pie chart, which represents data as slices of a circle.\nOutput as a <code>PixelCanvas</code>, which is a raster-based rendering …\nA scatter graph, which plots individual data points.\nOutput as an <code>Svg</code>, which is a scalable vector graphics …\nCreates a plot of the specified type with default settings.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRepresents an area chart, including its title, axis …\nAdds a dataset to the area chart.\nConfiguration settings for rendering the chart (e.g., …\nA collection of datasets to be visualized in the area …\nDraws the area under a dataset on the canvas.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>AreaChart</code> instance with the specified title, …\nTitle of the area chart.\nLabel for the X-axis.\nLabel for the Y-axis.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA grouped bar chart representation, supporting horizontal …\nAdds a dataset to the grouped bar chart.\nConfiguration settings for rendering the chart (e.g., …\nA collection of datasets to be visualized in the grouped …\nDraws a horizontal grouped bar chart.\nDraws a vertical grouped bar chart.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>GroupBarChart</code> instance with the specified …\nOrientation of the bar chart (<code>Horizontal</code> or <code>Vertical</code>).\nTitle of the bar chart.\nLabel for the X-axis.\nLabel for the Y-axis.\nRepresents a histogram, including title, axis labels, bin …\nAdds a single data value to the histogram.\nAdds multiple data values to the histogram.\nCached frequencies for each bin.\nCached width of each bin.\nNumber of bins in the histogram.\nCalculates the bin ranges and frequencies for the …\nColor of the histogram bars in RGB format.\nConfiguration settings for rendering the histogram.\nRaw data values to be represented in the histogram.\nReturns the argument unchanged.\nHandle hover functionality and return updated buffer if …\nCalls <code>U::from(self)</code>.\nCached maximum value in the dataset.\nCached minimum value in the dataset.\nCreates a new <code>Histogram</code> instance with the specified …\nTitle of the histogram.\nLabel for the X-axis.\nLabel for the Y-axis.\nRepresents a pie chart with title, datasets, and …\nAdds a slice to the pie chart.\nConfiguration settings for rendering the chart (e.g., …\nA collection of datasets, where each dataset contains:\nDraws a slice of the pie chart on the canvas.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>PieChart</code> instance with the specified title …\nTitle of the pie chart.\nRepresents a graph limited to the first quadrant (x &gt;= 0, …\nAdds a dataset to the graph after filtering out points not …\nConfiguration settings for rendering the graph (e.g., …\nA collection of datasets to be visualized in the graph.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>Quadrant1Graph</code> instance with the specified …\nTitle of the graph.\nLabel for the X-axis.\nLabel for the Y-axis.\nRepresents a scatter graph, including title, axis labels, …\nAdds a dataset to the scatter graph.\nConfiguration settings for rendering the graph (e.g., …\nA collection of datasets to be visualized on the scatter …\nDraws a single dot on the canvas using the specified dot …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>ScatterGraph</code> instance with the specified …\nTitle of the scatter graph.\nLabel for the X-axis.\nLabel for the Y-axis.\nRepresents the type of axis in a graph or chart.\nThe horizontal axis, typically representing independent …\nThe vertical axis, typically representing dependent …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA dashed line with configurable dash length.\nA dotted line with configurable dot spacing.\nRepresents the style of a line in a graph or chart.\nA solid line with no gaps.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nHorizontal orientation, typically used for charts where …\nRepresents the orientation of a chart, graph, or component.\nVertical orientation, typically used for charts where data …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA circular point.\nA cross-shaped point.\nRepresents the shape and size of scatter plot points.\nA square-shaped point.\nA triangular point.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")