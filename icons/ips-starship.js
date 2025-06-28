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
export const IpsStarshipIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-starship ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-starship" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 256a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm32-192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM188.9 205.4L137 160l71 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l32.1 0 65.5 57.3-2.2 .4C109.1 221.4 96 237.4 96 256s13.1 34.6 31.4 38.3l2.2 .4L64.1 352 32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-71 0 51.9-45.4 43 8.6c-5.2-18.9-7.9-38.7-7.9-59.2s2.7-40.3 7.9-59.2l-43 8.6z" })] })));
};
export default IpsStarshipIcon;
//# sourceMappingURL=ips-starship.js.map