# Perfect Fox: Config tweaks to enhance your Firefox experience
This project is based on gist called make firefox fast again with some change based on my experience and preferences, you can check the original from the link : https://bit.ly/FFfastagain

## Best three extensions for privacy
1- uBlock origin : Light and powerfull ads blocker, download it : 
https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/

2- Privacy badger : best tracker blocker you can use it instead of using native firefox tracking blocker, download it : https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/

3- LocalCDN : best alternative of outdated JSLibCache to offline load of CDN files for better privacy and security, download it : https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/

## Setting for extensions 
If your are apply predictive network tweaks you need to uncheck this option in uBlock setting page :
- `Disable pre-fetching`

If you will use LocalCDN extension you need to uncheck this option in LocalCDN advanced tab of setting page :
- `Block Google Fonts` in order to avoid break websites use google-hosted fonts.

To avoid any issues woud happen if you use both ublock and localCDN extensions you need to copy rules from localCDN advaced tab setting for ublock origin and paste it in rules tab of ublock setting page and save it.

# Recommended Browser settings

## Normal Browser settings

1) Go to about:preferences#privacy
2) Select `Custom`
3) deactivate all filters in this section
4) Scroll down to `Security` -> `Deceptive Content and Dangerous Software Protection`
5) Disable `Block dangerous and deceptive content`

_Rationale: Those filters use a lot of CPU time to process, and are not very helpful - except for newbies. The `Dangerous Software` filters may actually even block downloads the user want to fetch, that's why it is recommended to disable these._


## `about:config` settings

### General tweaks
```
nglayout.initialpaint.delay = 0
nglayout.initialpaint.delay_in_oopif = 0
security.dialog_enable_delay = 0
browser.sessionstore.interval = 60000
```

### GFX tweaks
```
gfx.webrender.all = true // enables WR (GPU) + additional features
gfx.canvas.accelerated = true // DEFAULT on macOS and Linux v.110
gfx.canvas.accelerated.cache-items = 32768
gfx.canvas.accelerated.cache-size = 4096
layers.acceleration.force-enabled = false
gfx.content.skia-font-cache-size = 80
gfx.webrender.compositor = true
gfx.webrender.compositor.force-enabled = true
gfx.webrender.enabled = true
gfx.webrender.precache-shaders = true
gfx.webrender.program-binary-disk = true
gfx.webrender.software.opengl = true
image.mem.decode_bytes_at_a_time = 65536
image.mem.shared.unmap.min_expiration_ms = 120000
layers.gpu-process.enabled = true
layers.gpu-process.force-enabled = true
image.cache.size = 10485760
media.memory_cache_max_size = 1048576
media.memory_caches_combined_limit_kb = 3145728
media.hardware-video-decoding.force-enabled = true
```

### Network tweaks
```
network.captive-portal-service.enabled  = false
network.notify.checkForProxies = false
network.dns.disableIPv6 = true
network.ssl_tokens_cache_capacity = 32768
fission.autostart = false
privacy.partition.network_state = false
network.http.max-connections = 1800
network.http.max-persistent-connections-per-proxy = 256
network.http.max-persistent-connections-per-server = 10
network.http.max-urgent-start-excessive-connections-per-host = 6
network.early-hints.preconnect.max_connections = 103
```


### Predictive network tweaks
```
network.dns.disablePrefetchFromHTTPS = false
network.dnsCacheEntries = 20000
network.dnsCacheExpiration = 3600
network.dnsCacheExpirationGracePeriod = 240
network.predictor.enable-hover-on-ssl = true
network.predictor.enable-prefetch = true
network.predictor.preconnect-min-confidence = 20
network.predictor.prefetch-force-valid-for = 3600
network.predictor.prefetch-min-confidence = 30
network.predictor.prefetch-rolling-load-count = 120
network.predictor.preresolve-min-confidence = 10
```

### Extra tweaks
```
extensions.htmlaboutaddons.discover.enabled = false
extensions.htmlaboutaddons.recommendations.enabled = false
app.update.auto = false // disable firefox autoupdate
app.shield.optoutstudies.enabled = false
browser.aboutConfig.showWarning = false
reader.parse-on-load.enabled = false // disable firefox reader mode
browser.tabs.warnOnClose = true
browser.ctrlTab.sortByRecentlyUsed = true
```


### Clean Startup tweaks
```
browser.shell.shortcutFavicons = false
user_pref("browser.startup.blankWindow = false
user_pref("browser.startup.preXulSkeletonUI = false
```


### Media tweaks
```
media.autoplay.default = 0 // allow autoplay for video and audio
media.videocontrols.picture-in-picture.display-text-tracks.size = small // change subtitle size  for video in pip mode
media.hls.enabled = true
media.cache_readahead_limit = 9000
media.cache_resume_threshold = 6000
```


### Mozilla tweaks
```
accessibility.force_disabled = 1
identity.fxaccounts.enabled = true // allow firefox account sync
browser.tabs.firefox-view = false // disable new annoying firefox view tab
permissions.default.desktop-notification = 2 // block websites notification requests
permissions.default.geo = 2
geo.provider.network.url = https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%
geo.provider.ms-windows-location = false
permissions.manager.defaultsUrl = empty value
webchannel.allowObject.urlWhitelist = empty value
```


### Mozilla UI tweaks
```
layout.css.prefers-color-scheme.content-override", 2
toolkit.legacyUserProfileCustomizations.stylesheets = true
app.update.suppressPrompts = true
browser.compactmode.show = true 
browser.privatebrowsing.vpnpromourl = empty value
extensions.getAddons.showPane = false
extensions.htmlaboutaddons.recommendations.enabled = false
browser.shell.checkDefaultBrowser = false
browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons = false
browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features = false
browser.preferences.moreFromMozilla = false
browser.tabs.tabmanager.enabled = false
browser.aboutwelcome.enabled = false
findbar.highlightAll = true
middlemouse.contentLoadURL = false
browser.privatebrowsing.enable-new-indicator = false
```


### URL Bar tweaks
```
browser.urlbar.suggest.engines = false
browser.urlbar.suggest.topsites", false
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

```
