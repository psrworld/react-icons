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
export const IpbKickstarterKIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon brands-icon ipb-kickstarter-k ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-kickstarter-k" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M356.6 256.2l40.8-40.5c42.2-41.9 42.2-110.3 0-152.1s-111-41.9-153.2 0L229.3 78.4C209.6 50.3 177.1 32 140.2 32C80.5 32 32 80.2 32 139.5V372.5C32 431.9 80.5 480 140.2 480c37.1 0 69.3-18.3 89-46.4l14.9 14.7c42.2 41.9 111 41.9 153.2 0s42.2-110.3 0-152.1l-40.8-40z" })] })));
};
export default IpbKickstarterKIcon;
//# sourceMappingURL=ipb-kickstarter-k.js.map