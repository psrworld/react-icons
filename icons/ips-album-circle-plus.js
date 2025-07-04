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
export const IpsAlbumCirclePlusIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-album-circle-plus ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-album-circle-plus" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 96.7c-5.3-.5-10.6-.7-16-.7c-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4c6.5 25.5 18.5 48.7 34.8 68.4L64 480c-35.3 0-64-28.7-64-64L0 96zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm208 0a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48z" })] })));
};
export default IpsAlbumCirclePlusIcon;
//# sourceMappingURL=ips-album-circle-plus.js.map