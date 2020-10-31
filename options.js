// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function stepNode(element) {
  do{
    if (element.hasChildNodes()) {
      stepNode(element.firstChild)
    }
  }while(element = element.nextSibling)
}

var frame = document.querySelector("#main-frame frame").document;
var iframeDocument = frame.contentWindow.document;
