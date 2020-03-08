$(function() {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    console.log(location.host)
    if (location.host == "twitter.com") {
      var clickLogic = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;

        console.log(target.parentElement.parentNode.children[1].children[1].innerText)
        console.log(text);
        var titleObj = target.parentElement.parentNode.children[1].children[1].innerText.split(/\r?\n/);
        var obj = {
          entity: titleObj[0],
          entityTag: titleObj[1],
          body: text,
          type: "twitter"
        }
        console.log(JSON.stringify(obj))
        $.post("https://webhook.site/3fae51a7-3652-4ddc-b348-3d3fada05c0d",
        obj,
        function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);
          data = {
            "articles": [
              {
                "author": "Bob Brigham",
                "content": "The Associated Press issued a bombshell report on Saturday evening that the White House overruled medical experts who had sought to issue a warning to America's seniors.\r\n\"The White House overruled health officials who wanted to recommend that elderly and phy\u2026 [+1536 chars]",
                "description": "White House reportedly overruled health officials who had urgent coronavirus warning for America\u2019s seniors",
                "publishedAt": "2020-03-08T09:00:01Z",
                "source": {
                  "id": null,
                  "name": "Salon.com"
                },
                "title": "Trump administration blocked health officials' urgent coronavirus warning: report",
                "url": "https://www.salon.com/2020/03/08/trump-administration-blocked-health-officials-urgent-coronavirus-warning-report_partner/",
                "urlToImage": "https://media.salon.com/2020/01/donald-trump-0131201.jpg"
              },
              {
                "author": "Bob Brigham",
                "content": "The Associated Press issued a bombshell report on Saturday evening that the White House overruled medical experts who had sought to issue a warning to America\u2019s seniors.\r\n\u201cThe White House overruled health officials who wanted to recommend that elderly and phy\u2026 [+1247 chars]",
                "description": "The Associated Press issued a bombshell report on Saturday evening that the White House overruled medical experts who had sought to issue a warning to America\u2019s seniors. \u201cThe White House overruled health officials who wanted to recommend that elderly and phys\u2026",
                "publishedAt": "2020-03-08T03:05:23Z",
                "source": {
                  "id": null,
                  "name": "Rawstory.com"
                },
                "title": "White House overruled health officials who had urgent coronavirus warning for America\u2019s seniors: report",
                "url": "https://www.rawstory.com/2020/03/white-house-overruled-health-officials-who-had-urgent-coronavirus-warning-for-americas-seniors-report/",
                "urlToImage": "https://www.rawstory.com/wp-content/uploads/2019/10/trump-afp-6.jpg"
              }
            ],
            "status": "ok",
            "totalResults": 12
          };

          let str = '<div class="news-card-container">';
          for (const [i, datum] of data['articles'].entries()) {
            let datePublished = new Date(datum['publishedAt']);
            str += '<div class="card news-card card-' + i + '">';
            str += '<div class="card-section">';
            str += '<article class="news-card-article">';
            str += '<em class="news-card-date">' + DAYS[datePublished.getDay()] + ', ' + datePublished.getDate() + ' ' + MONTHS[datePublished.getMonth()] + '</em>';
            str += '<h3 class="news-card-title">' + datum['title'] + '</h3>';
            str += '<p class="news-card-description">' + datum['description'] + '</p>';
            str += '<p><a href="' + datum['url'] + '">Continue reading on ' + datum['source']['name'] + ' </a></p>';

            let colorClass = 'orange';
            if (datum['sentiment_score'] > 0)
                colorClass = 'green'
            else if (datum['sentiment_score'] < 0)
                colorClass = 'red'
            str += '<div class="sentiment-circle ' + colorClass + '"></div>';

            str += '</article>' + '</div>' + '</div>';
          }

          str += '</div>';
          console.log($(str)[0])
          target.append($(str)[0]);
        });
      }
    } else {
      var clickLogic = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        console.log(text)
        var titleObj = target.parentElement.parentNode.parentNode.children[1].children[1].children[0].innerText.split(/\r?\n/);
        var obj = {
          entity: titleObj[0],
          entityTime: titleObj[1],
          body: text,
          type: "facebook"
        }
        console.log(JSON.stringify(obj))
      }
      document.addEventListener('click', clickLogic, false);
    }

    document.addEventListener('click', clickLogic, false);
});
