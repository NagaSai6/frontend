
export default {
  appendPadding: 10,
  data: [],
  angleField: "value",
  colorField: "type",
  radius: 1,
  innerRadius: 0.6,
  label: {
    type: "inner",
    offset: "-50%",
    content: "{value}",
    style: {
      textAlign: "right",
      fontSize: 14,
      fontWeight: "bold",
      color: "#000",
    },
  },
  interactions: [{ type: "element-selected" }, { type: "element-active" }],
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      content: "100%",
    },
  },
};
