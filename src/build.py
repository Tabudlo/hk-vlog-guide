#!/usr/bin/env python3
"""Build index.html: inlines src/data.js and Leaflet into src/app.html.

Usage: python3 src/build.py path/to/leaflet/dist
(Leaflet 1.9.4 from npm: `npm pack leaflet@1.9.4 && tar xzf leaflet-1.9.4.tgz`.)
"""
import pathlib, sys

root = pathlib.Path(__file__).resolve().parent.parent
lf = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / "vendor"
app = (root / "src/app.html").read_text()
app = app.replace("/*LEAFLET_CSS*/", (lf / "leaflet.css").read_text())
app = app.replace("/*LEAFLET_JS*/", (lf / "leaflet.js").read_text().replace("</script", "<\\/script"))
app = app.replace("/*DATA_JS*/", (root / "src/data.js").read_text())
(root / "index.html").write_text(app)
print("wrote index.html", len(app) // 1024, "KB")
