import * as React from "react";

const SvgComponent = ({ color, ...props }) => (
  <svg
    width={201}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15.436} cy={18.017} r={14.458} fill="#61D3DE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.115 30.412V27.19c0-1.157.46-2.268 1.278-3.086l9.82-9.82a4.365 4.365 0 0 1 6.173 0l10.23 10.23a4.365 4.365 0 0 1 1.278 3.085v.114h.013v3.438a6.727 6.727 0 0 1-6.728 6.728H7.856A6.727 6.727 0 0 1 1.13 31.15v-.378c-.01-.12-.014-.24-.014-.361Z"
      fill="#EA4256"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m2.342 24.155.05-.051 9.821-9.82a4.365 4.365 0 0 1 6.173 0l10.056 10.055c-2.346 4.817-7.288 8.136-13.006 8.136-5.79 0-10.785-3.404-13.094-8.32Z"
      fill="#0A2143"
    />
    <path
      d="M42.304 8.618h6.248l6.599 16.1h.28l6.6-16.1h6.248V32.58h-4.914V16.984h-.2l-6.2 15.48h-3.347l-6.2-15.539h-.2V32.58h-4.914V8.618ZM79.161 32.93c-1.817 0-3.389-.386-4.715-1.158a7.928 7.928 0 0 1-3.054-3.253c-.717-1.396-1.076-3.015-1.076-4.855 0-1.857.359-3.48 1.076-4.868.718-1.396 1.736-2.48 3.054-3.253 1.326-.78 2.898-1.17 4.715-1.17 1.818 0 3.386.39 4.704 1.17 1.326.773 2.348 1.857 3.065 3.253.718 1.389 1.077 3.011 1.077 4.867 0 1.841-.36 3.46-1.077 4.856a7.904 7.904 0 0 1-3.065 3.253c-1.318.772-2.886 1.158-4.704 1.158Zm.024-3.861c.826 0 1.517-.234 2.07-.702.555-.476.972-1.123 1.253-1.942.288-.82.433-1.751.433-2.797 0-1.045-.145-1.977-.433-2.796-.281-.819-.698-1.466-1.252-1.942s-1.245-.714-2.071-.714c-.835 0-1.537.238-2.106.714-.562.476-.987 1.123-1.276 1.942-.28.819-.42 1.751-.42 2.796 0 1.046.14 1.978.42 2.797.289.819.714 1.466 1.276 1.942.57.468 1.271.702 2.106.702Zm18.865 3.861c-1.841 0-3.424-.39-4.75-1.17a7.91 7.91 0 0 1-3.043-3.276c-.702-1.396-1.053-3.003-1.053-4.82 0-1.841.355-3.456 1.065-4.845.718-1.396 1.736-2.484 3.054-3.264 1.318-.788 2.886-1.182 4.703-1.182 1.568 0 2.941.285 4.119.854 1.178.57 2.11 1.37 2.796 2.4.687 1.029 1.065 2.238 1.135 3.626h-4.703c-.133-.897-.484-1.618-1.053-2.164-.562-.554-1.3-.831-2.212-.831-.772 0-1.447.21-2.024.632-.57.413-1.014 1.018-1.334 1.813-.32.796-.48 1.76-.48 2.89 0 1.147.157 2.122.469 2.925.32.804.768 1.416 1.345 1.837.577.421 1.252.632 2.024.632.57 0 1.08-.117 1.533-.35a2.96 2.96 0 0 0 1.135-1.019c.304-.452.503-.994.597-1.626h4.703c-.078 1.373-.452 2.582-1.123 3.627-.663 1.037-1.58 1.848-2.75 2.434-1.17.585-2.554.877-4.153.877Zm14.416-5.522.012-5.98h.725l5.757-6.82h5.721l-7.734 9.032h-1.182l-3.299 3.768Zm-4.516 5.171V8.618h4.984V32.58h-4.984Zm11.232 0-5.289-7.827 3.323-3.522 7.804 11.35h-5.838Zm14.006.351c-1.817 0-3.389-.386-4.715-1.158-1.318-.78-2.336-1.864-3.054-3.253-.717-1.396-1.076-3.015-1.076-4.855 0-1.857.359-3.48 1.076-4.868.718-1.396 1.736-2.48 3.054-3.253 1.326-.78 2.898-1.17 4.715-1.17 1.818 0 3.386.39 4.704 1.17 1.326.773 2.348 1.857 3.065 3.253.718 1.389 1.077 3.011 1.077 4.867 0 1.841-.359 3.46-1.077 4.856a7.9 7.9 0 0 1-3.065 3.253c-1.318.772-2.886 1.158-4.704 1.158Zm.024-3.861c.827 0 1.517-.234 2.071-.702.554-.476.971-1.123 1.252-1.942.288-.82.433-1.751.433-2.797 0-1.045-.145-1.977-.433-2.796-.281-.819-.698-1.466-1.252-1.942s-1.244-.714-2.071-.714c-.835 0-1.537.238-2.106.714-.562.476-.987 1.123-1.276 1.942-.28.819-.421 1.751-.421 2.796 0 1.046.141 1.978.421 2.797.289.819.714 1.466 1.276 1.942.569.468 1.271.702 2.106.702Zm18.865 3.861c-1.818 0-3.389-.386-4.715-1.158a7.919 7.919 0 0 1-3.054-3.253c-.718-1.396-1.077-3.015-1.077-4.855 0-1.857.359-3.48 1.077-4.868.717-1.396 1.735-2.48 3.054-3.253 1.326-.78 2.897-1.17 4.715-1.17 1.817 0 3.385.39 4.703 1.17 1.326.773 2.348 1.857 3.066 3.253.717 1.389 1.076 3.011 1.076 4.867 0 1.841-.359 3.46-1.076 4.856a7.908 7.908 0 0 1-3.066 3.253c-1.318.772-2.886 1.158-4.703 1.158Zm.023-3.861c.827 0 1.517-.234 2.071-.702.554-.476.971-1.123 1.252-1.942.289-.82.433-1.751.433-2.797 0-1.045-.144-1.977-.433-2.796-.281-.819-.698-1.466-1.252-1.942s-1.244-.714-2.071-.714c-.834 0-1.536.238-2.106.714-.561.476-.987 1.123-1.275 1.942-.281.819-.421 1.751-.421 2.796 0 1.046.14 1.978.421 2.797.288.819.714 1.466 1.275 1.942.57.468 1.272.702 2.106.702Zm10.745 10.25V14.607h4.914v3.02h.223c.218-.485.534-.976.948-1.475.421-.507.967-.928 1.638-1.264.678-.343 1.521-.515 2.527-.515 1.31 0 2.519.344 3.627 1.03 1.108.679 1.993 1.704 2.656 3.077.663 1.365.994 3.077.994 5.137 0 2.004-.323 3.697-.971 5.078-.639 1.372-1.513 2.414-2.621 3.124-1.099.702-2.332 1.053-3.697 1.053-.967 0-1.79-.16-2.469-.48-.67-.32-1.22-.722-1.649-1.205a6.115 6.115 0 0 1-.983-1.486h-.152v9.617h-4.985Zm4.879-15.726c0 1.069.149 2.001.445 2.797.296.795.725 1.415 1.287 1.86.562.437 1.244.655 2.048.655.811 0 1.497-.222 2.059-.667.561-.452.987-1.076 1.275-1.872.297-.803.445-1.727.445-2.773 0-1.037-.145-1.95-.433-2.738-.289-.787-.714-1.404-1.275-1.848-.562-.445-1.252-.667-2.071-.667-.812 0-1.498.214-2.06.643-.553.43-.979 1.038-1.275 1.826-.296.787-.445 1.716-.445 2.784Zm29.606-3.86-4.563.28a2.352 2.352 0 0 0-.503-1.053 2.67 2.67 0 0 0-1.018-.76c-.413-.196-.909-.293-1.486-.293-.772 0-1.423.164-1.954.491-.53.32-.795.75-.795 1.287 0 .43.171.792.515 1.088.343.297.932.535 1.766.714l3.253.655c1.747.36 3.05.936 3.908 1.732.858.796 1.287 1.84 1.287 3.136 0 1.178-.347 2.211-1.041 3.1-.687.89-1.631 1.584-2.832 2.083-1.193.491-2.57.737-4.13.737-2.379 0-4.275-.495-5.686-1.486-1.405-.998-2.227-2.355-2.469-4.072l4.902-.257c.148.726.507 1.28 1.077 1.662.569.374 1.298.561 2.188.561.873 0 1.575-.168 2.106-.503.538-.343.811-.784.819-1.322-.008-.453-.199-.823-.574-1.112-.374-.296-.951-.522-1.731-.678l-3.113-.62c-1.755-.351-3.061-.96-3.919-1.826-.85-.865-1.276-1.97-1.276-3.31 0-1.155.312-2.15.936-2.984.632-.835 1.518-1.479 2.656-1.931 1.147-.452 2.489-.679 4.025-.679 2.27 0 4.056.48 5.359 1.44 1.311.959 2.075 2.265 2.293 3.92Z"
      fill={color}
    />
    <path
      d="M135.688 35.387a.747.747 0 1 0-.929 1.171l.929-1.17Zm13.743 1.114a.747.747 0 1 0-1.057-1.057l1.057 1.057Zm-14.672.057c1.352 1.073 3.681 2.352 6.336 2.728 2.687.38 5.72-.169 8.336-2.785l-1.057-1.057c-2.228 2.228-4.764 2.688-7.07 2.362-2.338-.331-4.426-1.474-5.616-2.419l-.929 1.171Z"
      fill="#EA4256"
    />
    <path
      d="M129.169 12.726c3.102-.86 4.971-.897 6.839 0m11.437-.112c1.532-1.233 3.655-1.443 6.316-.934"
      stroke="#EA4256"
      strokeWidth={1.196}
      strokeLinecap="round"
    />
    <path
      d="M42.478 37.67a.598.598 0 1 0 .27 1.164l-.27-1.165Zm27.62-2.181a.598.598 0 0 0-.404-1.126l.403 1.126Zm-27.35 3.346c7.582-1.76 11.772-2.627 13.976-2.842.547-.054.949-.064 1.238-.044.3.022.417.074.446.092.006.004-.01-.006-.026-.033-.016-.028-.018-.048-.018-.046.002.024-.006.113-.085.31l1.108.448c.099-.244.19-.538.17-.837a1.066 1.066 0 0 0-.511-.854c-.276-.174-.627-.246-1-.272-.383-.028-.86-.011-1.438.046-2.3.224-6.575 1.113-14.13 2.867l.27 1.164Zm15.53-2.564c-.121.303-.181.668-.02 1.019.16.351.474.541.774.641.57.192 1.407.166 2.377.025 1.99-.289 4.98-1.137 8.688-2.467l-.403-1.126c-3.691 1.323-6.589 2.138-8.457 2.41-.959.139-1.546.118-1.826.024-.126-.042-.095-.067-.066-.004.028.061-.013.063.043-.073l-1.11-.449Z"
      fill="#EA4256"
    />
    <path
      d="M198.353 30.479c-.457 1.446-1.444 2.332-2.66 2.96"
      stroke="#EA4256"
      strokeWidth={1.121}
      strokeLinecap="round"
    />
    <path
      d="M200.453 31.139c-.689 1.755-2.304 3.385-4.234 4.558"
      stroke="#EA4256"
      strokeWidth={1.046}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgComponent;