function srs_get_version_code(){return"1.23"}function srs_get_player_modal(){return $(".modal-body").width()}function srs_get_player_width(){return srs_get_player_modal()-30}function srs_get_player_height(){return 9*srs_get_player_width()/19}function srs_get_player_vhost(){return"players"}function srs_get_api_server_port(){return 8085}function srs_get_srs_http_server_port(){return 8080}function build_default_rtmp_url(){var r=parse_query_string(),t=void 0==r.server?window.location.hostname:r.server,e=void 0==r.port?1935:r.port,s=void 0==r.vhost?window.location.hostname:r.vhost,_=void 0==r.app?"live":r.app,o=void 0==r.stream?"stream1":r.stream
return t==s||""==s?"rtmp://"+t+":"+e+"/"+_+"/"+o:"rtmp://"+t+":"+e+"/"+_+"...vhost..."+s+"/"+o}function srs_init(r){r&&$(r).val(build_default_rtmp_url())}