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
export const IpsChessQueenPieceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 256 512", fill: color, className: `react-icon solid-icon ips-chess-queen-piece ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chess-queen-piece" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM229.9 124.9l-41.5 67.5c11.2 2.1 19.6 11.8 19.6 23.6c0 13.3-10.7 24-24 24l-8 0 19.6 144L60.4 384 80 240l-8 0c-13.3 0-24-10.7-24-24c0-11.8 8.5-21.5 19.6-23.6L26.1 124.9c-3.7-6-3-13.6 1.6-18.9s12.1-6.9 18.6-4.1c3 1.3 6.3 2.1 9.8 2.1c11.8 0 21.6-8.5 23.6-19.7c1.1-6.3 6-11.4 12.3-12.8s12.8 1.1 16.5 6.4C112.8 84 119.9 88 128 88s15.2-4 19.6-10.1c3.7-5.3 10.2-7.8 16.5-6.4s11.1 6.4 12.3 12.8c2 11.2 11.8 19.7 23.6 19.7c3.5 0 6.8-.7 9.8-2.1c6.4-2.9 13.9-1.2 18.6 4.1s5.3 13 1.6 18.9zM208 416l43.2 57.6c3.1 4.2 4.8 9.2 4.8 14.4c0 13.3-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24c0-5.2 1.7-10.2 4.8-14.4L48 416l160 0z" })] })));
};
export default IpsChessQueenPieceIcon;
//# sourceMappingURL=ips-chess-queen-piece.js.map