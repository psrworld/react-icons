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
export const IpsAlbumCollectionCircleUserIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-album-collection-circle-user ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-album-collection-circle-user" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 24c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C42.7 0 32 10.7 32 24zM48 160c-13.8 0-26.9 5.9-36 16.2S-1.3 200.3 .4 214l32 256c3 24 23.4 42 47.6 42l314.8 0c-18.9-13.3-35.1-30.3-47.5-49.9c-26.9 11.4-58 17.9-91.3 17.9C154.4 480 72 419.1 72 344s82.4-136 184-136c45.4 0 86.9 12.1 119 32.2c31.5-29.9 74.2-48.2 121-48.2c4.5 0 9 .2 13.4 .5c-2-5.9-5.2-11.5-9.4-16.3c-9.1-10.3-22.2-16.2-36-16.2L48 160zM256 376c17.7 0 32-10.7 32-24s-14.3-24-32-24s-32 10.7-32 24s14.3 24 32 24zM40 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l432 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 80zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-66.3 80.7C553.5 468.1 526.2 480 496 480s-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7l65.2 0c21 0 38.9 13.7 45.1 32.7zM448 336a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" })] })));
};
export default IpsAlbumCollectionCircleUserIcon;
//# sourceMappingURL=ips-album-collection-circle-user.js.map