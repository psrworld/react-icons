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
export const IpsGalleryThumbnailsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-gallery-thumbnails ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-gallery-thumbnails" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M512 64l0 224L64 288 64 64l448 0zM64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 0zM0 448l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm192-32c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0zm128 32l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm192-32c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0z" })] })));
};
export default IpsGalleryThumbnailsIcon;
//# sourceMappingURL=ips-gallery-thumbnails.js.map