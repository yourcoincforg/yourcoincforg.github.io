import URI from 'urijs'

function parseUrlPath(url) {
    const uri = new URI(url);
    const path = uri.pathname().split("/");
    return path;
}

export default function convertPages(pages) {
    let pageMap = {pages : []};
    const pl = pages.length;
    for (var j = 0; j < pl; j++) {
        let folder = pageMap;
        // console.log(pages[j]);
        if (pages[j].hasOwnProperty("path")) {
            const p = pages[j].path;
            const ps = p.substring(1,p.length-1);
            const path = ps.length > 1 ? ps.split("/") : [""];
            // console.log(path);
            const l = path.length;
            if (path[l - 1].indexOf("404") < 0) {
                for (var i = 0; i < l; i++) {
                  // console.log(path[i]);
                  if (i !== l-1) {
                    if (folder.hasOwnProperty("folders")) {
                        if (!folder.folders.hasOwnProperty(path[i])) {
                          // console.log("new folder");
                          folder.folders[path[i]] = { pages : []}
                        }
                    } else {
                        // console.log("no folders");
                        folder.folders = {
                            [path[i]] : {pages : []}
                        }
                    }
                    folder = folder.folders[path[i]];
                  } else {
                    if (!folder.hasOwnProperty("pages")) {
                      // console.log("no pages");
                      folder.pages = [];
                    }
                    // console.log("push page");
                    folder.pages.push({
                      path: path[i],
                      data: pages[j].data
                    });
                  }
                }
            }
        }
    }
    return pageMap;
}

function buildUrlTree(urls) {
    var tree = {};
    for (var url in urls) {
        if (object.hasOwnProperty(url)) {
            const url_array = parseUrlPath(url);
            for (var i = 0; i < url_array.length; i++) {
                console.log(url_array[i]);
            }
        }
    }
}
