/* --- DESKTOP --- */

var desktop_api = document.createElement('script');
desktop_api.src = 'https://api.github.com/repos/particl/particl-desktop/releases/latest?callback=get_desktop_version';

function get_desktop_version(response) {
  var version = response.data.tag_name, // get current tag from GH API (=> "v1.1.0")
      ver_num = version.substring(1), // strip the leading "v" (=> "1.1.0")
      // generate OS links
      core_link = "https://github.com/particl/particl-desktop/releases/download/",
          win64 = core_link + version + "/particl-desktop-" + ver_num + "-win-x64.zip",
        win_exe = core_link + version + "/particl-desktop-" + ver_num + "-win.exe",
        linux64 = core_link + version + "/particl-desktop-" + ver_num + "-linux-x64.zip",
      linux_deb = core_link + version + "/particl-desktop-" + ver_num + "-linux-amd64.deb",
      linux_rpm = core_link + version + "/particl-desktop-" + ver_num + "-linux-x86_64.rpm",
            mac = core_link + version + "/particl-desktop-" + ver_num + "-mac.zip",
        mac_dmg = core_link + version + "/particl-desktop-" + ver_num + "-mac.dmg",
         source = "https://github.com/particl/particl-desktop/archive/" + version + ".zip",
          guide = "https://github.com/particl/particl-desktop/releases/tag/" + version;

  // Insert current latest release version number to HTML
  $('#particl-desktop-version').html(version);

  // Insert links for latest downloads
  $('#desktop-win64').attr("href", win64);
  $('#desktop-win-exe').attr("href", win_exe);
  $('#desktop-linux64').attr("href", linux64);
  $('#desktop-linux-deb').attr("href", linux_deb);
  $('#desktop-linux-rpm').attr("href", linux_rpm);
  $('#desktop-mac').attr("href", mac);
  $('#desktop-mac-dmg').attr("href", mac_dmg);
  $('#desktop-source').attr("href", source);
  $('#desktop-guide').attr("href", guide);
}

/* --- CORE & CLI --- */

var core_api = document.createElement('script');
core_api.src = 'https://api.github.com/repos/particl/particl-core/releases/latest?callback=get_core_version';

function get_core_version(response) {
  var version = response.data.tag_name, // get current tag from GH API (=> "v1.1.0")
      ver_num = version.substring(1), // strip the leading "v" (=> "1.1.0")
      // generate OS links
      core_link = "https://github.com/particl/particl-core/releases/download/",
      win64_exe = core_link + version + "/particl-" + ver_num + "-win64-setup.exe",
          win64 = core_link + version + "/particl-" + ver_num + "-win64.zip",
        linux64 = core_link + version + "/particl-" + ver_num + "-x86_64-linux-gnu.tar.gz",
      linux_arm = core_link + version + "/particl-" + ver_num + "-arm-linux-gnueabihf.tar.gz",
            mac = core_link + version + "/particl-" + ver_num + "-osx-unsigned.dmg",
        mac_tar = core_link + version + "/particl-" + ver_num + "-osx64.tar.gz",
         source = "https://github.com/particl/particl-core/archive/" + version + ".zip",
          guide = "https://github.com/particl/particl-core/releases/tag/" + version;

  // Insert current latest release version number to HTML
  $('#particl-core-version').html(version);
  $('#particl-cli-version').html(version);

  // Insert links for latest downloads
  $('#core-win64-exe').attr("href", win64_exe);
  $('#core-win64').attr("href", win64);
  $('#core-linux64').attr("href", linux64);
  $('#core-linux-arm').attr("href", linux_arm);
  $('#core-mac').attr("href", mac);
  $('#core-mac-tar').attr("href", mac_tar);
  $('#core-source').attr("href", source);
  $('#core-guide').attr("href", guide);

  $('#cli-source').attr("href", guide);
  $('#cli-guide').attr("href", guide);
}

/* --- COPAY --- */

var copay_api = document.createElement('script');
copay_api.src = 'https://api.github.com/repos/particl/copay/releases/latest?callback=get_copay_version';

function get_copay_version(response) {
  var version = response.data.tag_name; // get current tag from GH API (=> "v1.1.0")

  // Insert current latest release version number to HTML
  $('#particl-copay-version').html(version);
}

$("head").append(desktop_api).append(core_api).append(copay_api);
