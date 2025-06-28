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
export const IpsAlbumCollectionIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-album-collection ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-album-collection" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 24c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C42.7 0 32 10.7 32 24zM48 160c-13.8 0-26.9 5.9-36 16.2S-1.3 200.3 .4 214l32 256c3 24 23.4 42 47.6 42l352 0c24.2 0 44.6-18 47.6-42l32-256c1.7-13.7-2.5-27.4-11.6-37.7s-22.2-16.2-36-16.2L48 160zM440 344c0 75.1-82.4 136-184 136S72 419.1 72 344s82.4-136 184-136s184 60.9 184 136zM256 376c17.7 0 32-10.7 32-24s-14.3-24-32-24s-32 10.7-32 24s14.3 24 32 24zM40 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l432 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 80z" })] })));
};
export default IpsAlbumCollectionIcon;
//# sourceMappingURL=ips-album-collection.js.map