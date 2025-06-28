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
export const Ipb42GroupIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon brands-icon ipb-42-group ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-42-group" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 96V416C341.011 416 361.818 411.861 381.23 403.821C400.641 395.78 418.28 383.995 433.138 369.138C447.995 354.28 459.78 336.641 467.821 317.23C475.861 297.818 480 277.011 480 256C480 234.989 475.861 214.182 467.821 194.771C459.78 175.359 447.995 157.72 433.138 142.863C418.28 128.005 400.641 116.22 381.23 108.179C361.818 100.139 341.011 96 320 96ZM0 256L160.002 416L320.003 256L160.002 96L0 256ZM480 256C480 277.011 484.138 297.818 492.179 317.23C500.219 336.643 512.005 354.28 526.862 369.138C541.72 383.995 559.357 395.781 578.77 403.821C598.182 411.862 618.989 416 640 416V96C597.565 96 556.869 112.858 526.862 142.863C496.857 172.869 480 213.565 480 256Z" })] })));
};
export default Ipb42GroupIcon;
//# sourceMappingURL=ipb-42-group.js.map