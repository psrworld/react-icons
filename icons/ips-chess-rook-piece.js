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
export const IpsChessRookPieceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-chess-rook-piece ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chess-rook-piece" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M67.4 384L80 264 49.4 233.4c-6-6-9.4-14.1-9.4-22.6L40 112c0-8.8 7.2-16 16-16l24 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24c0-8.8 7.2-16 16-16l24 0c8.8 0 16 7.2 16 16l0 98.7c0 8.5-3.4 16.6-9.4 22.6L240 264l12.6 120L67.4 384zM136 280.9c0 3.9 3.2 7.1 7.1 7.1l33.8 0c3.9 0 7.1-3.2 7.1-7.1l0-32.9c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32.9zM20.8 473.6L64 416l192 0 43.2 57.6c3.1 4.2 4.8 9.2 4.8 14.4c0 13.3-10.7 24-24 24L40 512c-13.3 0-24-10.7-24-24c0-5.2 1.7-10.2 4.8-14.4z" })] })));
};
export default IpsChessRookPieceIcon;
//# sourceMappingURL=ips-chess-rook-piece.js.map