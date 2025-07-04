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
export const IpsChessKnightPieceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-chess-knight-piece ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chess-knight-piece" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M57.6 102.4l-6.9 6.9c-12 12-18.7 28.3-18.7 45.3l0 81.2c0 10.7 5.3 20.7 14.2 26.6l3.5 2.4c12.7 8.5 29.1 9.5 42.8 2.7c2.3-1.1 4.5-2.5 6.5-4l38.8-29.1c5.5-4.1 13.1-4.1 18.6 0c8.2 6.1 8.3 18.4 .2 24.7L81 317c-20.8 16-33 40.7-33 67l224 0 26.9-107.6c3.4-13.6 5.1-27.5 5.1-41.5c0-94.4-76.5-171-171-171L47.8 64C39.1 64 32 71.1 32 79.8c0 6 3.4 11.5 8.7 14.2l16.9 8.4zm19.2 54.4a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L272 416 48 416z" })] })));
};
export default IpsChessKnightPieceIcon;
//# sourceMappingURL=ips-chess-knight-piece.js.map