import Mock from "mockjs";
import qs from "querystring";
import avatar1 from "../assets/avatar/01.jpg";
import avatar2 from "../assets/avatar/02.jpg";
import avatar3 from "../assets/avatar/03.jpg";
import avatar4 from "../assets/avatar/04.jpg";
import avatar5 from "../assets/avatar/05.jpg";
import avatar6 from "../assets/avatar/06.jpg";
Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 50,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,
          ],
        },
      ],
    },
  });
});
