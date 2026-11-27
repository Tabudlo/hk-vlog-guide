#!/usr/bin/env python3
"""Build index.html and sw.js.

Inlines src/data.js, src/photos.js and Leaflet (vendor/) into src/app.html,
and writes sw.js with the photo list and a version derived from the page.
Usage: python3 src/build.py
"""
import hashlib, json, pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
lf = root / "vendor"
app = (root / "src/app.html").read_text()
app = app.replace("/*LEAFLET_CSS*/", (lf / "leaflet.css").read_text())
app = app.replace("/*LEAFLET_JS*/", (lf / "leaflet.js").read_text().replace("</script", "<\\/script"))
from datetime import datetime, timedelta, timezone
build = datetime.now(timezone(timedelta(hours=8))).strftime("%-d %b %H:%M")
app = app.replace("__BUILD__", build)
app = app.replace("/*DATA_JS*/", (root / "src/data.js").read_text())
photos_js = (root / "src/photos.js").read_text()
app = app.replace("/*PHOTOS_JS*/", photos_js)
(root / "index.html").write_text(app)

imgs = sorted("./" + p for p in set(re.findall(r'"(img/[^"]+\.webp)"', photos_js)))
version = hashlib.sha1(app.encode()).hexdigest()[:10]
sw = (root / "src/sw.template.js").read_text()
sw = sw.replace("__VERSION__", version).replace("__PHOTOS__", json.dumps(imgs, indent=0))
(root / "sw.js").write_text(sw)
print(f"version {build}: wrote index.html ({len(app)//1024} KB) and sw.js ({len(imgs)} photos, version {version})")
