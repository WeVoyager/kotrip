$(function(){
        $.ajax({
            url: 'preview.json',
            type: 'GET',
            success: function (data) {
                var subList = '', title = '', listEl = '', arLabel = '';

                data.element.forEach(function(el,idx){
                    title = el.title;
                    if(title == sessionStorage.getItem(title)){
                        arLabel += title+',';
                        
                        listEl += "<li>"
                        listEl += "<img src="+el.imgUrl+">"
                        listEl += "</li>"
                    }
                });
                $('.sub-list').html(listEl);
                $('.sub-list li').each(function(idx){
                    $(this).attr('aria-label',arLabel.split(',')[idx])
                    $(this).find('img').attr('alt',arLabel.split(',')[idx])
                })

                if($('.sub-list li').length > 0){
                    $('.sub-scroll p').fadeOut();
                }else{
                    $('.sub-scroll p').fadeIn();
                }
        
                console.log($('.sub-list li').length)
            }
        })
})
