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
export const IpsChessClockIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-chess-clock ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chess-clock" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 56c0-13.3-10.7-24-24-24L120 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 48-88 0c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-32 0 0-16c0-8.8-7.2-16-16-16L400 96c-8.8 0-16 7.2-16 16l0 16-184 0 0-48 32 0c13.3 0 24-10.7 24-24zM576 304a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zm-52.7-59.3c-6.2-6.2-16.4-6.2-22.6 0l-48 48c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6zM176 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm-16 48l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16s-16 7.2-16 16z" })] })));
};
export default IpsChessClockIcon;
//# sourceMappingURL=ips-chess-clock.js.map