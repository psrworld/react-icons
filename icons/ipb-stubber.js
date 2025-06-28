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
export const IpbStubberIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon brands-icon ipb-stubber ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-stubber" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M136.5 294.2l58.8 22.9c9.1-36.8 25.4-61.1 55-61.1c49.4 0 71.4 63.6 142.4 63.6c15.6 0 35.9-2.8 55.3-13.3V368c0 61.8-50.4 112-112.3 112H0l41.8-56L0 368l41.7-56L0 256.1l41.8-56L0 144.1 41.8 88 0 32H335.7C397.6 32 448 82.3 448 144.1v51.3c-9.2 36.3-25.9 60.6-55 60.6c-49.6 0-71.6-63.5-142.4-63.5c-35.9 0-95.2 14.6-114.1 101.6h0z" })] })));
};
export default IpbStubberIcon;
//# sourceMappingURL=ipb-stubber.js.map