$(function() {
    const TWEET_CONTAINER = 'div.stream ol#stream-items-id li.stream-item[data-item-type="tweet"] div.tweet';
    const TWEET_FOOTER = '.content .stream-item-footer .ProfileTweet-actionList';
    const API_BASE_URL = 'http://127.0.0.1:5000';

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var twitterIntervalID = null;

    var cnbOpenTweetID = null;
    console.log(location.host)
    if (location.host == "twitter.com") {
      var clickLogic = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        test1 = target.parentElement.parentNode.parentNode.children[1]
        console.log(target.parentElement.parentNode.children[1].children[1].innerText)
        console.log(text);

        let str = '<div class="ProfileTweet-action ProfileTweet-action--CNB js-toggleState">' +
          '<button class="ProfileTweet-actionButton js-actionButton" type="button">' +
          '<div class="IconContainer js-tooltip" data-original-title="Give me more context!">' +
          '<span class="Icon Icon--CNB"></span>' +
          '<span class="u-hiddenVisually">Context News Bot</span>' +
          '</div><span class="ProfileTweet-actionCount">' +
          '<span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">CNB</span>' +
          '</span></button></div>';

        target.prepend($(str)[0]);
      }
    } else {
      var clickLogic = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        test1 = target.parentElement.parentNode.parentNode.children[1]
        test1 = target.parentElement.parentNode.parentNode.children[1]
        console.log(test1.children[1].children[0].innerText)
        console.log(text)
        let str = '<div class="ProfileTweet-action ProfileTweet-action--CNB js-toggleState">' +
          '<button class="ProfileTweet-actionButton js-actionButton" type="button">' +
          '<div class="IconContainer js-tooltip" data-original-title="Give me more context!">' +
          '<span class="Icon Icon--CNB"></span>' +
          '<span class="u-hiddenVisually">Context News Bot</span>' +
          '</div><span class="ProfileTweet-actionCount">' +
          '<span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">CNB</span>' +
          '</span></button></div>';

        target.prepend($(str)[0]);
      }
      document.addEventListener('click', clickLogic, false);
    }

    document.addEventListener('click', clickLogic, false);

    function createContextPanel(tweetID) {
      let $tweet = $('div.tweet[data-tweet-id="' + tweetID + '"]');

      $tweet.find('.cnb-loading-text').remove();
      let $loadingElement = $('<h4 class="cnb-loading-text">Loading...</h4>');
      $tweet.append($loadingElement);

      getDataForTweet(tweetID).then((data) => {
        console.log(data);

        if (data['relevant_articles'].length == 0 && data['wiki_urls'].length == 0) {
          $tweet.find('.cnb-loading-text').text('No relevant articles found!');
          return;
        }

        let str = '<div class="news-card-container">';
        for (const [i, datum] of data['relevant_articles'].entries()) {
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

        for (const [i, wiki] of data['wiki_urls'].entries()) {
            str += '<div class="wikipedia-tag">';
            str += '<div class="keyword keyword-' + i + '">';
            str += '<a href="' + wiki['wiki_url'] + '">' + wiki['entity_name'] + ' [Wikipedia]</a>';
            str += '</div>' + '</div>';
        }
        str += '</div>';

        let $contextPanel = $(str);
        $tweet.append($contextPanel);
        $tweet.find('.cnb-loading-text').remove();
        cnbOpenTweetID = tweetID;
      });
    }

    function getDataForTweet(tweetID) {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_BASE_URL + "/tweet",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
        },
        "processData": false,
        "data": "{\n\t\"id\": " + tweetID + "\n}"
      }
      return $.ajax(settings);
    }

    // used to toggle context menu
    function buttonListener() {
      let $this = $(this);
      let btnTweetID = $this.attr('data-tweet-id');

      if (cnbOpenTweetID == null) {
        createContextPanel(btnTweetID);
      } else {
        $('div.tweet[data-tweet-id="' + cnbOpenTweetID + '"]').find('.news-card-container').remove();
        if (btnTweetID != cnbOpenTweetID) {
            createContextPanel(btnTweetID);
        } else {
            cnbOpenTweetID = null;
        }
      }
    }
});
