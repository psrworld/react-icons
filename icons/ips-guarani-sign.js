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
export const IpsGuaraniSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-guarani-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-guarani-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 0c-17.7 0-32 14.3-32 32l0 34.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3l0 34.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-34.7c90.8-15.2 160-94.2 160-189.3c0-17.7-14.3-32-32-32l-128 0 0-92c22.1 5.7 41.8 17.1 57.6 32.6c12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C299 92 263.5 73.3 224 66.7L224 32c0-17.7-14.3-32-32-32zM160 132L160 380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124zM224 380l0-92 92 0c-11.6 45-47 80.4-92 92z" })] })));
};
export default IpsGuaraniSignIcon;
//# sourceMappingURL=ips-guarani-sign.js.map