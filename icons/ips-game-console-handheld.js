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
export const IpsGameConsoleHandheldIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-game-console-handheld ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-game-console-handheld" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 352c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 64zM96 80l0 112c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-112c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16zM232 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88-72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM96 304l0 16-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16z" })] })));
};
export default IpsGameConsoleHandheldIcon;
//# sourceMappingURL=ips-game-console-handheld.js.map