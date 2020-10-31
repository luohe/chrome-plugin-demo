// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let switchHideChinese = document.getElementById('blankCheckbox');

switchHideChinese.onchange = function() {
  const value = switchHideChinese.checked;

  chrome.tabs.onUpdated.addListener(function () {
    console.log(value);
  });

  chrome.tabs.query({active: true, currentWindow: true, status: "complete"}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: "./hide.js"});
  });
};
