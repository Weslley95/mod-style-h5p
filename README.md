## mod-style-h5p

## π¨ Customization for h5p css and js

## βοΈ Functionality

- [x] Used for both hvp plugin and moodle h5p core
- [x] Change default css styles
- [x] Change js functions

## π  How to use

1. Clone the repository to your theme folder
<pre>
https://github.com/Weslley95/mod-style-h5p.git
</pre>
2. Leave the h5p folder and the renderers file inside your theme folder

<pre>
moodle/
βββ ...                                
βββ theme/                            
|   βββ theme/                         
|   β   βββ h5p/                        
|   |   β   βββ js/                     
|   |   |   β   βββ custom.js          
|   |   |   β   βββ customEditor.js    
|   |   |   |   βββ ...                
|   |   β   βββ style/                  
|   |   |   β   βββ custom.js          
|   |   |   |   βββ ...                
|   |   |   βββ ...                    
|   β   βββ renderers.php              
|   |   βββ ...                        
β   βββ ...                            
βββ ...                                
</pre>

π‘ If you are using moodle lower than version 3.9, it is recommended to remove the class theme_trema_core_h5p_renderer from the renderers.php file and use only the class theme_trema_mod_hvp_renderer.

## π LicenΓ§a
LicenΓ§a [MIT](./LICENSE).
