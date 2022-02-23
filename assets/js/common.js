$(document).ready(function() {
    new WOW().init();
    
    $('.nav-scroll').bind('click', function(event) {
        var link = $(this);

        if(link.attr("href") == "#") {
            $('body, html').animate({scrollTop:0},500);
        } else {
            var margin = 20;

            switch(link.attr('href')) {
                case "#howtoplay":
                    margin = 20;
                    break;
            }

            $('html, body').animate({
                scrollTop: $(link.attr('href')).offset().top - margin
            }, 500);

            event.preventDefault();
        }
    });

    setTimeout(function() {
        $(".progress-bar").each(function(index, el) {
            var val = $(el).attr("data-percents");
            $(el).animate({
                "width": val + "%"
            }, 1000);
        });
        $(".server .online b").each(function(index, el) {
            var val = $(el).attr('data-value');
            var number = 0;

            var timer = setInterval(function() {
                if (val < 100) {
                    number += 2;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 300) {
                    number += 10;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 700) {
                    number += 15;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 1000) {
                    number += 30;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 2000) {
                    number += 50;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 3000) {
                    number += 75;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 4000) {
                    number += 95;
                    if (number > val) {
                        number = val;
                    }
                }
                if (number <= val) {
                    $(el).html(number)
                };

                if(number == val) {
                    clearInterval(timer);
                }
            }, 50);
        });
        $(".servers-block-stat .span-servers-stat b").each(function(index, el) {
            var val = $(el).attr('data-value');
            var number = 0;

            var timer = setInterval(function() {
                if (val < 100) {
                    number += 2;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 300) {
                    number += 10;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 700) {
                    number += 15;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 1000) {
                    number += 30;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 2000) {
                    number += 50;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 3000) {
                    number += 75;
                    if (number > val) {
                        number = val;
                    }
                } else if (val < 4000) {
                    number += 95;
                    if (number > val) {
                        number = val;
                    }
                }
                if (number <= val) {
                    $(el).html(number)
                };

                if(number == val) {
                    clearInterval(timer);
                }
            }, 50);
        });
    }, 500);

    new ClipboardJS('.fa-copy');

    $('[data-toggle="tooltip"]').tooltip();
});