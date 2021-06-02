## mod-style-h5p

## 🎨 Customization for h5p css and js

## ⚙️ Functionality

- [x] Used for both hvp plugin and moodle h5p core
- [x] Change default css styles
- [x] Change js functions

## 🛠 How to use

1. Clone the repository to your theme folder
<pre>
https://github.com/Weslley95/mod-style-h5p.git
</pre>
2. Leave the h5p folder and the renderers file inside your theme folder

<pre>
moodle/
├── ...                                
├── theme/                            
|   ├── theme/                         
|   │   ├── h5p/                        
|   |   │   ├── js/                     
|   |   |   │   ├── custom.js          
|   |   |   │   ├── customEditor.js    
|   |   |   |   └── ...                
|   |   │   ├── style/                  
|   |   |   │   ├── custom.js          
|   |   |   |   └── ...                
|   |   |   └── ...                    
|   │   ├── renderers.php              
|   |   └── ...                        
│   └── ...                            
└── ...                                
</pre>

💡 If you are using moodle lower than version 3.9, it is recommended to remove the class theme_trema_core_h5p_renderer from the renderers.php file and use only the class theme_trema_mod_hvp_renderer.

## 📝 Licença
Licença [MIT](./LICENSE).
