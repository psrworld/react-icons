var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsListTimelineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-list-timeline ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-list-timeline" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M16 96a48 48 0 1 1 96 0A48 48 0 1 1 16 96zM64 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM191.5 54.4c5.5-4.2 12.3-6.4 19.2-6.4L424 48c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-213.3 0c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8c-8.5-6.4-8.5-19.2 0-25.6l38.4-28.8zM153.1 243.2l38.4-28.8c5.5-4.2 12.3-6.4 19.2-6.4L488 208c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-277.3 0c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8c-8.5-6.4-8.5-19.2 0-25.6zm0 160l38.4-28.8c5.5-4.2 12.3-6.4 19.2-6.4L424 368c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-213.3 0c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8c-8.5-6.4-8.5-19.2 0-25.6z" })] })));
};
export default IpsListTimelineIcon;
//# sourceMappingURL=ips-list-timeline.js.map