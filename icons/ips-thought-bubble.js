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
export const IpsThoughtBubbleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-thought-bubble ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-thought-bubble" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M374.8 80.3C355.9 33.2 309.8 0 256 0s-99.9 33.2-118.8 80.3c-3-.2-6.1-.3-9.2-.3C57.3 80 0 137.3 0 208s57.3 128 128 128c14.4 0 28.3-2.4 41.3-6.8C184.7 361.6 217.7 384 256 384s71.3-22.4 86.7-54.8c12.9 4.4 26.8 6.8 41.3 6.8c70.7 0 128-57.3 128-128s-57.3-128-128-128c-3.1 0-6.1 .1-9.2 .3zM144 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsThoughtBubbleIcon;
//# sourceMappingURL=ips-thought-bubble.js.map