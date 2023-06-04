/****************************************************************************
 * Perfect Fox                                                            *                                                            *
 * version: 113                                                             *                             *
****************************************************************************/

/** GENERAL TWEAKS ***/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("security.dialog_enable_delay",      0);
user_pref("browser.sessionstore.interval",      60000);

/** GFX ***/
user_pref("gfx.webrender.all", true); // enables WR (GPU) + additional features
user_pref("gfx.canvas.accelerated", true); // DEFAULT on macOS and Linux v.110
user_pref("gfx.canvas.accelerated.cache-items",  32768);
user_pref("gfx.canvas.accelerated.cache-size",  4096);
user_pref("layers.acceleration.force-enabled", false);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.software.opengl", true);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);
user_pref("image.cache.size", 10485760);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 3145728);
user_pref("media.hardware-video-decoding.force-enabled", true);

/** NETWORK ***/
user_pref("network.captive-portal-service.enabled",      false);
user_pref("network.notify.checkForProxies",      false);
user_pref("network.dns.disableIPv6",      true);
user_pref("network.ssl_tokens_cache_capacity", 32768);
user_pref("fission.autostart", false);
user_pref("privacy.partition.network_state", false);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-proxy", 256);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6);
user_pref("network.early-hints.preconnect.max_connections", 103);

/** PREDICTIVE NETWORK **/
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("network.dnsCacheEntries", 20000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dnsCacheExpirationGracePeriod", 240);
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.predictor.preconnect-min-confidence", 20);
user_pref("network.predictor.prefetch-force-valid-for", 3600);
user_pref("network.predictor.prefetch-min-confidence", 30);
user_pref("network.predictor.prefetch-rolling-load-count", 120);
user_pref("network.predictor.preresolve-min-confidence", 10);

/** EXTRAS ***/
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

/** CLEAN STARTUP ***/
user_pref("browser.shell.shortcutFavicons",      false);
user_pref("browser.startup.blankWindow",      false);
user_pref("browser.startup.preXulSkeletonUI", false);

/** BROWSER CACHE **/
user_pref("browser.cache.disk.capacity",      8192000);
user_pref("browser.cache.disk.smart_size.enabled",    false);
user_pref("browser.cache.frecency_half_life_hours",    18);
user_pref("browser.cache.max_shutdown_io_lag",   16);
user_pref("browser.cache.memory.capacity",      2097152);
user_pref("browser.cache.memory.max_entry_size",      327680);

/** MEDIA ***/
user_pref("media.autoplay.default",      0);
user_pref("media.videocontrols.picture-in-picture.display-text-tracks.size",      "small");
user_pref("media.hls.enabled",      true);
user_pref("media.cache_readahead_limit", 9000);
user_pref("media.cache_resume_threshold", 6000);

/** MOZILLA ***/
user_pref("accessibility.force_disabled", 1);
user_pref("identity.fxaccounts.enabled", true);
user_pref("browser.tabs.firefox-view", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** MOZILLA UI ***/
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("app.update.suppressPrompts", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("findbar.highlightAll", true);
user_pref("middlemouse.contentLoadURL", false);
user_pref("browser.privatebrowsing.enable-new-indicator", false);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/*** POCKET ***/
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", " ");
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", "");

/** DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** TAB BEHAVIOR ***/
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("layout.css.has-selector.enabled", true);

/** STOP TELEMETRY ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry",      false);
user_pref("browser.newtabpage.activity-stream.telemetry",      false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint",      "data:;");
user_pref("browser.ping-centre.telemetry",      false);
user_pref("dom.security.unexpected_system_load_telemetry_enabled",      false);
user_pref("network.trr.confirmation_telemetry_enabled",      false);
user_pref("security.app_menu.recordEventTelemetry",      false);
user_pref("security.certerrors.recordEventTelemetry",      false);
user_pref("security.identitypopup.recordEventTelemetry",      false);
user_pref("security.protectionspopup.recordEventTelemetry",      false);
user_pref("services.sync.telemetry.maxPayloadCount",      0);
user_pref("services.settings.main.search-telemetry-v2.last_check",      0);
user_pref("services.sync.telemetry.submissionInterval",      0);
user_pref("telemetry.fog.test.activity_limit",      false);
user_pref("telemetry.fog.test.inactivity_limit",      0);
user_pref("telemetry.number_of_site_origin.min_interval",      0);
user_pref("toolkit.telemetry.archive.enabled",      false);
user_pref("toolkit.telemetry.bhrPing.enabled",      false);
user_pref("toolkit.telemetry.cachedClientID",      " ");
user_pref("toolkit.telemetry.firstShutdownPing.enabled",      false);
user_pref("toolkit.telemetry.geckoview.batchDurationMS",      0);
user_pref("toolkit.telemetry.geckoview.maxBatchStalenessMS",      0);
user_pref("toolkit.telemetry.ipcBatchTimeout",     0 );
user_pref("toolkit.telemetry.newProfilePing.enabled",      false);
user_pref("toolkit.telemetry.pioneer-new-studies-available",      false);
user_pref("toolkit.telemetry.previousBuildID",      0);
user_pref("toolkit.telemetry.reportingpolicy.firstRun",      false);
user_pref("toolkit.telemetry.unified",      false);
user_pref("toolkit.telemetry.updatePing.enabled",     false );

/** STOP REPORTING ***/
user_pref("breakpad.reportURL",      "data:;");
user_pref("browser.chrome.errorReporter.infoURL",      "data:;");
user_pref("browser.contentblocking.report.cookie.url",      "data:;");
user_pref("browser.contentblocking.report.cryptominer.url",      "data:;");
user_pref("browser.contentblocking.report.endpoint_url",      "data:;");
user_pref("browser.contentblocking.report.fingerprinter.url",      "data:;");
user_pref("browser.contentblocking.report.hide_vpn_banner",      false);
user_pref("browser.contentblocking.report.lockwise.enabled",      false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url",      "data:;");
user_pref("browser.contentblocking.report.manage_devices.url",      "data:;");
user_pref("browser.contentblocking.report.mobile-android.url",      "data:;");
user_pref("browser.contentblocking.report.mobile-ios.url",      "data:;");
user_pref("browser.contentblocking.report.proxy_extension.url",      "data:;");
user_pref("browser.contentblocking.report.show_mobile_app",      false);
user_pref("browser.contentblocking.report.social.url",      "data:;");
user_pref("browser.contentblocking.report.tracker.url",      "data:;");
user_pref("browser.contentblocking.report.vpn-android.url",      "data:;");
user_pref("browser.contentblocking.report.vpn-ios.url",      "data:;");
user_pref("browser.contentblocking.report.vpn-promo.url",      "data:;");
user_pref("browser.contentblocking.report.vpn.url",      "data:;");
user_pref("browser.contentblocking.report.vpn_platforms",      " ");
user_pref("browser.contentblocking.report.vpn_regions",      " ");
user_pref("browser.contentblocking.report.vpn_sub_id",      " ");
user_pref("browser.contentblocking.reportBreakage.url",      "data:;");
user_pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress",      0);
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL",      "data:;");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL",      "data:;");
user_pref("browser.safebrowsing.provider.google.reportURL",      "data:;");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL",      "data:;");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL",      "data:;");
user_pref("browser.safebrowsing.provider.google4.reportURL",      "data:;");
user_pref("browser.safebrowsing.reportPhishURL",      "data:;");
user_pref("browser.tabs.crashReporting.sendReport",      false);
user_pref("datareporting.healthreport.infoURL",      "data:;");
user_pref("datareporting.healthreport.uploadEnabled",      false);
user_pref("datareporting.policy.currentPolicyVersion",      0);
user_pref("datareporting.policy.dataSubmissionEnabled",      false);
user_pref("datareporting.policy.firstRunURL",      "data:;");
user_pref("datareporting.policy.minimumPolicyVersion",      0);
user_pref("datareporting.policy.minimumPolicyVersion.channel-beta",      0);
user_pref("dom.ipc.plugins.reportCrashURL",      false);
user_pref("dom.ipc.reportProcessHangs",      false);
user_pref("dom.reporting.cleanup.timeout",      0);
user_pref("dom.reporting.delivering.maxFailures",      0);
user_pref("dom.reporting.delivering.maxReports",      0);
user_pref("dom.reporting.delivering.timeout",      0);
user_pref("extensions.abuseReport.amWebAPI.enabled",      false);
user_pref("extensions.abuseReport.amoDetailsURL",      "data:;");
user_pref("extensions.abuseReport.enabled",      false);
user_pref("extensions.abuseReport.url",      "data:;");
user_pref("extensions.webcompat-reporter.newIssueEndpoint",      "data:;");
user_pref("layout.css.report_errors",      "data:;");
user_pref("memory.report_concurrency",      0);
user_pref("privacy.popups.maxReported",      0);
user_pref("security.csp.reporting.script-sample.max-length",      0);
user_pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2",      );
user_pref("toolkit.crashreporter.infoURL",      "data:;");
