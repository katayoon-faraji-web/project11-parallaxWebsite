let _main = document.getElementById('mn')
        let _whole = document.getElementById('whole')
        let st_show = document.getElementById('st_show')
        let open_gallery_btn = document.getElementById('opengallery')
        let close_gallery_btn = document.getElementById('closegallery')
        let _slider = document.getElementById('_slider')
        let _header = document.getElementById('_header')
        let _bg = document.getElementById('background')
        let _3imgholder = document.getElementById('box')
        let _3imgs = document.querySelectorAll('#box>img')
        let third_section = document.getElementById('third')
        let fourth_section = document.getElementById('fourth')
        let fifth_section = document.getElementById('fifth')
        let sixth_section = document.getElementById('sixth')
        let seventh_section = document.getElementById('seventh')
        let eigth_section = document.getElementById('eigth')
        let _bg2 = document.getElementById('_bg2')
        let _dropdown_menu = document.getElementById('dropdown_menu')
        let _btn_open_close_dropdown_menu = document.getElementById('open_close_dropdown_menu')

        let third_section_articles = document.querySelectorAll('#third article')
        let fourth_section_articles = document.querySelectorAll('#fourth img')
        let fifth_section_articles = document.querySelectorAll('#whole .sec5_boxs')
        let seventh_section_everything = document.querySelector('#seventh>div')
        let eigth_section_everything = document.querySelector('#eigth>div')
        let _carousel2 = document.getElementById('carousel')
        let _carousel2_spans = document.querySelectorAll('#carousel span')
        let _carousel2_strongs = document.querySelectorAll('#carousel strong')
        let _carousel2_divs = document.querySelectorAll('#carousel div')
        let all_sections = document.querySelectorAll('#whole>section')
        let lis_in_dropdown_menu = document.querySelectorAll('#dropdown_menu li')

        let sh = _whole.scrollHeight
        let header_height = _header.clientHeight
        let header_offsettop = _header.offsetTop
        let _3imgholder_offsettop = _3imgholder.offsetTop
        let third_section_offsettop = third_section.offsetTop
        let fourth_section_offsettop = fourth_section.offsetTop
        let fifth_section_offsettop = fifth_section.offsetTop
        let sixth_section_offsettop = sixth_section.offsetTop
        let seventh_section_offsettop = seventh_section.offsetTop
        let eigth_section_offsettop = eigth_section.offsetTop
        let _main_clientwidth = _main.clientWidth
        let scroll_height = 0

        all_sections.forEach((val)=>{
            scroll_height += val.clientHeight
        })

        _whole.style.height = scroll_height +'px'
        fifth_section_articles.forEach((val)=>{
            val.setAttribute('data-offsetTop',val.offsetTop)
        })

        window.addEventListener('resize',()=>{
            sh = _whole.scrollHeight
            header_height = _header.clientHeight
            header_offsettop = _header.offsetTop
            _3imgholder_offsettop = _3imgholder.offsetTop
            third_section_offsettop = third_section.offsetTop
            fourth_section_offsettop = fourth_section.offsetTop
            fifth_section_offsettop = fifth_section.offsetTop
            sixth_section_offsettop = sixth_section.offsetTop
            seventh_section_offsettop = seventh_section.offsetTop
            eigth_section_offsettop = eigth_section.offsetTop
            _main_clientwidth = _main.clientWidth
            scroll_height = 0

            all_sections.forEach((val)=>{
                scroll_height += val.clientHeight
            })

            _whole.style.height = scroll_height +'px'
            fifth_section_articles.forEach((val)=>{
                val.setAttribute('data-offsetTop',val.offsetTop)
            })
        })
        
        let st_old = 0

        _main.addEventListener('scroll',(e)=>{
            let st = _main.scrollTop
            st_show.innerHTML = st
            
            if(st>st_old){
                _header.style.transform = 'translateY(-'+(header_height+header_offsettop)+'px)'
            }
            else{
                _header.style.top = st+'px'
                _header.style.top = 0
                _header.style.transform = 'translateY(0px)'
                if(st>700){
                    _header.style.background = '#2a2a2b6b'
                }
                else{
                    _header.style.background = 'transparent'
                }
            }
            _dropdown_menu.style.top = st+'px'
            if(_main.clientWidth<800){
                _bg.style.width = (100+(st/2))+'%'
            }
            else{
                _bg.style.width = (100+(st/5))+'%'
            }
            
            if((st+500)>=_3imgholder_offsettop){
                _3imgs[0].style.transform = 'rotate('+(-(st/50))+'deg) translateX(-'+((st/8))+'px)'
                _3imgs[1].style.transform = 'rotate(0deg)'
                _3imgs[2].style.transform = 'rotate('+((st/50))+'deg) translateX('+((st/8))+'px)'
            }
            else{
                _3imgs[0].style.transform = 'rotate(0deg) translateX(0px)'
                _3imgs[1].style.transform = 'rotate(0deg)'
                _3imgs[2].style.transform = 'rotate(0deg) translateX(0px)'
            }


            if((st+200)>=third_section_offsettop){
                third_section_articles.forEach((val)=>{
                    if(((st-((st-third_section_offsettop))-500)/st)>0.95){
                        val.style.transform = 'scale('+((st-((st-third_section_offsettop))-500)/st)+')' 
                    }
                    else{
                        val.style.transform = 'scale(.9)'
                    }
                    val.style.opacity = 0.1 + (st/(st-(st-sh)-8000))
                    
                })
            }else{
                third_section_articles.forEach((val)=>{
                    val.style.opacity = 0.1 + (st/(st-(st-sh)+2000))
                    if(((st-((st-third_section_offsettop))-500)/st)==0.8){
                        val.style.transform = 'scale('+((st-((st-third_section_offsettop))-500)/st)+')' 
                    }
                    else{
                        val.style.transform = 'scale(1.2)'
                    }
                })
            }

            if((st+200)>=fourth_section_offsettop){
                if(_main.clientWidth<900){
                    fourth_section_articles.forEach((val)=>{
                        val.style.transform = 'translateY(-'+(st/25)+'px)'
                    })
                }
                else{
                    fourth_section_articles.forEach((val)=>{
                        val.style.transform = 'translateY(-'+(st/15)+'px)'
                    })
                }
            }

            if((st+200)>=fifth_section_offsettop){
                fifth_section_articles.forEach((val)=>{
                    if((st+200)>=(val.getAttribute('data-offsetTop'))){
                        if(((st-((st-fifth_section_offsettop))-500)/st)>0.9){
                            val.style.transform = 'scale('+((st-((st-fifth_section_offsettop))-500)/st)+')' 
                        }
                        else{
                            val.style.transform = 'scale(.9)'
                        }
                        val.style.opacity = 0.1 + (st/(st-(st-sh)-8000))
                    }
                    else{
                        val.style.opacity = 0.1 + (st/(st-(st-sh)+2000))
                        if(((st-((st-fifth_section_offsettop))-500)/st)==0.8){
                            val.style.transform = 'scale('+((st-((st-fifth_section_offsettop))-500)/st)+')' 
                        }
                        else{
                            val.style.transform = 'scale(1.2)'
                        }
                    }
                })
            }
            if((st+200)>=sixth_section_offsettop){
                _carousel2_spans.forEach((val)=>{
                    val.style.opacity = '1'
                    val.style.transform = 'scale(1)'
                })
                _carousel2_strongs.forEach((val)=>{
                    val.style.opacity = '1'
                    val.style.transform = 'scale(1)'
                })
                _carousel2_divs.forEach((val)=>{
                    val.style.opacity = '1'
                    val.style.transform = 'scale(1)'
                })
            }
            if((st+200)>=seventh_section_offsettop){
                if(((st-((st-seventh_section_offsettop))-500)/st)>0.95){
                    seventh_section_everything.style.transform = 'scale('+((st-((st-seventh_section_offsettop))-500)/st)+')' 
                }
                else{
                    seventh_section_everything.style.transform = 'scale(.9)'
                }
                seventh_section_everything.style.opacity = 0.1 + (st/(st-(st-sh)-8000))
            }else{
                seventh_section_everything.style.opacity = 0.1 + (st/(st-(st-sh)+2000))
                if(((st-((st-seventh_section_offsettop))-500)/st)==0.8){
                    seventh_section_everything.style.transform = 'scale('+((st-((st-seventh_section_offsettop))-500)/st)+')' 
                }
                else{
                    seventh_section_everything.style.transform = 'scale(1.2)'
                }
            }
            if((st+200)>=eigth_section_offsettop){
                                
                if(((st-((st-eigth_section_offsettop))-500)/st)>1){
                    eigth_section_everything.style.transform = 'scale('+((st-((st-eigth_section_offsettop))-500)/st)+')' 
                }
                else{
                    eigth_section_everything.style.transform = 'scale(1)'
                }
                eigth_section_everything.style.opacity = 0.1 + (st/(st-(st-sh)-8000))
            }else{
                eigth_section_everything.style.opacity = 0.1 + (st/(st-(st-sh)+2000))
                if(((st-((st-eigth_section_offsettop))-500)/st)==1){
                    eigth_section_everything.style.transform = 'scale('+((st-((st-eigth_section_offsettop))-500)/st)+')' 
                }
                else{
                    eigth_section_everything.style.transform = 'scale(1.2)'
                }
            }

           
            
            st_old = st
        })

        open_gallery_btn.addEventListener('click',()=>{
            _slider.style.transform = 'scale(1)'
        })

        close_gallery_btn.addEventListener('click',()=>{
            _slider.style.transform = 'scale(0)'
        })

        _btn_open_close_dropdown_menu.addEventListener('click',()=>{
            if(_dropdown_menu.getAttribute('data-state')=='closed'){
                lis_in_dropdown_menu.forEach((val)=>{
                    val.style.height = '40px'
                })
                _header.style.background = 'transparent'
                _dropdown_menu.style.paddingTop = '100px'
                _dropdown_menu.setAttribute('data-state','opened')
            }
            else{
                lis_in_dropdown_menu.forEach((val)=>{
                    val.style.height = 0
                })
                _header.style.background = '#2a2a2b6b'
                _dropdown_menu.style.paddingTop = 0
                _dropdown_menu.setAttribute('data-state','closed')
            }
            
        })


        // slider 2
        let _box = document.getElementById('main_box')
        let _carousel = document.getElementById('carousel')
        let _imgs = document.querySelectorAll('#carousel>div')
        let _right = document.getElementById('right')
        let _left = document.getElementById('left')
        let _list = document.getElementById('list')
        let img_len = _imgs.length
        _carousel.style.width = (3*(_main_clientwidth))+'px'
        let turn = 0

        _imgs.forEach((val)=>{
            let _circle = document.createElement('li')
            _circle.classList.add('circle')
            _list.appendChild(_circle)
        })
        let _lis = document.querySelectorAll('#list>li')
        
        _lis.forEach((val , i)=>{
            val.addEventListener('click',(e)=>{
                _lis.forEach((x)=>{
                    x.style.background = 'transparent'
                })
                e.target.style.background = 'white'
                turn = i
                _carousel.style.left = -(turn*600)+'px'
            })
        })
        _lis[turn].style.background = 'white'
        _right.addEventListener('click',(e)=>{
            if(turn < (img_len-1)){
                turn++
                _carousel.style.left = -(turn*(_main.clientWidth))+'px'
            }
            check_li()
            check_right()
            check_left()
            clearInterval(my_interval)
        })

        _left.addEventListener('click',(e)=>{
            if(turn > 0){
                turn--
                _carousel.style.left = -(turn*(_main.clientWidth))+'px'
            }
            check_li()
            check_left()
            check_right()
            clearInterval(my_interval)
        })

        function check_right(){
            if(turn==img_len-1){
                _right.style.opacity = 0
            }
            else{
                _right.style.opacity = 1
            }
        }
        function check_left(){
            if(turn==0){
                _left.style.opacity = 0
            }
            else{
                _left.style.opacity = 1
            }
        }
        function check_li(){
            _lis.forEach((x)=>{
                x.style.background = 'transparent'
            })
            _lis[turn].style.background = 'white'
        }
        let state = 'go'
        let my_interval = setInterval(() => {
            if((turn < (img_len-1)) && state=='go'){
                if(turn < (img_len-1)){
                    turn++
                    _carousel.style.left = -(turn*(_main.clientWidth))+'px'
                }
                check_li()
                check_right()
                check_left()
                }
            else{
                state = 'back'
                if(turn > 0){
                    turn--
                    _carousel.style.left = -(turn*(_main.clientWidth))+'px'
                }
                check_li()
                check_left()
                check_right()
                if(turn==0){
                    state = 'go'
                }
            }
        }, 2000);