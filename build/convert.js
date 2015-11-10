var content = Array(), 
    typename, 
    params = "",
    properties = Array(),
    define_property = Array(),
    thisequals = Array(),
    requires = Array(),
    jsonstr = Array(),
    comment = "\t/**\n * Arrays\n";
    
var fs = require('fs'),
    xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
parser.addListener('end', function(result) {
    var ebay_type =  result.items.$.name;
    result.items.complexType.forEach(function(cType){
        
        content = Array();
        typename = "";
        params = "";
        properties = Array();
        define_property = Array();
        thisequals = Array();
        requires = Array();
        jsonstr = Array();
        comment = "\t/**\n\t * Arrays\n";
        typename = cType.$.name;
        
        if(cType.sequence){
            if(cType.sequence[0].element){
                cType.sequence[0].element.forEach(function(element){    
                    var element = element.$;
                    params = params + element.name +", ";
                    thisequals.push("\tthis."+element.name+" = "+element.name+";");
                    var unbounded = element.maxOccurs === "undefined";
                    if(!unbounded){
                        unbounded = element.maxOccurs === "unbounded";
                    }
                    // if(element.type !== "string" && element.type !== "boolean" && element.type !== "long" 
                    // && element.type !== "int" && element.type !== "float" && element.type !== "dateTime" 
                    // && element.type !== "anyURI" && element.type !== "token" && element.type !== "duration"
                    // && element.type !== "time"){
                    if(valid_element(element.type)){
                        if(!unbounded){
                            properties.push("\tvar _"+element.name+";");
                            requires.push(element.type+" = require('./"+element.type+"')");
                            define_property.push("\tObject.defineProperty(this, '"+element.name+"', {\n\t\t get: function(){\n\t\t\t return _"+element.name+";\n\t\t},\n\t\t set: function(value){\n\t\t\t if(value !== undefined && value !== null){\n\t\t\t\tif(value instanceof "+element.type+"){ \n\t\t\t\t\t_"+element.name+" = value; \n\t\t\t\t}else{\n\t\t\t\t\tconsole.log('"+element.name+" expects type "+element.type+"');\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});");
                            jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name+".toJSON()");
                        }else if(unbounded){
                            jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name);
                            comment += "\t *\t"+element.name+": "+ element.type +"\n";
                        }
                    }else{
                        jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name);
                    }
                });
                var uniqueRequire = requires.filter(function(elem, pos) {
                                    return requires.indexOf(elem) == pos;
                                });
                var requireString = "";
                if(uniqueRequire.length > 0){
                    requireString = "var ";
                    requireString += uniqueRequire.join(",\n\t");
                    requireString = requireString.trim() + ";";
                    content.push(requireString);
                    content.push("");
                }
            }
        }else if(cType.simpleContent){
            cType.simpleContent[0].extension[0].attribute.forEach(function(element){
                var element = element.$;
                params = params + element.name +", ";
                thisequals.push("\tthis."+element.name+" = "+element.name+";");
                jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name);
            });
        }else if(cType.complexContent){
            comment = "base: "+cType.complexContent[0].extension[0].$base + "\n"+ comment;
            cType.complexContent[0].extension[0].sequence[0].element.forEach(function(element){
                var element = element.$;
                params = params + element.name +", ";
                thisequals.push("\tthis."+element.name+" = "+element.name+";");
                var unbounded = element.maxOccurs === "undefined";
                if(!unbounded){
                    unbounded = element.maxOccurs === "unbounded";
                }
                // if(element.type !== "string" && element.type !== "boolean" && element.type !== "long" 
                // && element.type !== "int" && element.type !== "float" && element.type !== "dateTime" 
                // && element.type !== "anyURI" && element.type !== "token" && element.type !== "duration"
                // && element.type !== "time"){
                if(valid_element(element.type)){
                    if(!unbounded){
                        properties.push("\tvar _"+element.name+";");
                        requires.push(element.type+" = require('./"+element.type+"')");
                        define_property.push("\tObject.defineProperty(this, '"+element.name+"', {\n\t\t get: function(){\n\t\t\t return _"+element.name+";\n\t\t},\n\t\t set: function(value){\n\t\t\t if(value !== undefined && value !== null){\n\t\t\t\t if(value instanceof "+element.type+"){ \n\t\t\t\t\t_"+element.name+" = value; \n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});");
                        jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name+".toJSON()");
                    }else if(unbounded){
                        jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name);
                        comment += "\t *\t"+element.name+": "+ element.type +"\n";
                    }
                }else{
                    jsonstr.push("\n\t\t"+element.name+": (this."+element.name+" === undefined)? null : this."+element.name);
                }
            });
            var uniqueRequire = requires.filter(function(elem, pos) {
                                return requires.indexOf(elem) == pos;
                            });
            var requireString = "";
            if(uniqueRequire.length > 0){
                requireString = "var ";
                requireString += uniqueRequire.join(",\n\t");
                requireString = requireString.trim() + ";";
                content.push(requireString);
                content.push("");
            }
            
        }
        params = params.substring(0, params.length-2);
        content.push("function "+typename+"("+params+") {");
        if(cType.annotation){
            content.push("\n\t/**");
            content.push("\t  Documentation");
            content.push("\t   "+cType.annotation[0].documentation);
            content.push("\t */\n");
        }
        content.push(comment + "\t */");
        if(properties.length > 0){
            content.push(properties.join("\n"));
        }
        if(define_property.length > 0){
            content.push(define_property.join("\n"));
        }
        if(thisequals.length > 0){
            content.push(thisequals.join("\n"));
        }
        content.push("}");
        content.push(typename+".prototype.toJSON = function(with_null) {");
        content.push("\tvar json = { " + jsonstr.join(","));
        content.push("\t};");
        content.push("\tif(!with_null) {");
        content.push("\t\tfor(var k in json) {");
        content.push("\t\t\tif(json[k] === null) {");
        content.push("\t\t\t\tdelete json[k];");
        content.push("\t\t\t}");
        content.push("\t\t}");
        content.push("\t}");
        content.push("\treturn json;");
        content.push("};");
        content.push("module.exports = "+typename+";");
        fs.writeFileSync(ebay_type+"/"+typename+".js", content.join("\n"),"utf8");
        // console.log(typename+' Done.');
    });
    result.items.simpleType.forEach(function(sType){
        jsonstr = Array();
        content = Array();
        if(sType.restriction[0].enumeration){    
            sType.restriction[0].enumeration.forEach(function(enumeration){
                var title = enumeration.$.value.replace(/([a-z])([A-Z])/g, '$1_$2');
                jsonstr.push("\n\t"+title.toUpperCase()+": '"+enumeration.$.value+"'");
            });
            jsonstr.sort();
            content.push("var "+sType.$.name+" =");
            content.push("{" + jsonstr.join(","));
            content.push("};");
            content.push("module.exports = "+sType.$.name+";");
            fs.writeFileSync(ebay_type+"/"+sType.$.name+".js", content.join("\n"),"utf8");
        }else{
            content.push("function "+sType.$.name+"(value) {");
            content.push("\tthis."+sType.$.name+" = value;");
            content.push("}");
            content.push(sType.$.name+".prototype.toJSON = function() {");
            content.push("\tif(this."+sType.$.name+" !== null) {")
            content.push("\t\treturn {");
            content.push("\t\t\t"+sType.$.name+": this."+sType.$.name);
            content.push("\t\t};");
            content.push("\t} else {");
            content.push("\t\treturn {};");
            content.push("\t}");
            content.push("};");
            content.push("module.exports = "+sType.$.name+";");
            fs.writeFileSync(ebay_type+"/"+sType.$.name+".js", content.join("\n"),"utf8");
        }
    });
});
var valid_element = function(elementtype){
    
    return elementtype !== "string" && elementtype !== "boolean" && elementtype !== "long" 
           && elementtype !== "int" && elementtype !== "float" && elementtype !== "dateTime" 
           && elementtype !== "anyURI" && elementtype !== "token" && elementtype !== "duration"
           && elementtype !== "time" && elementtype !== "double";
};
fs.readFile('./Trading.xml', "utf-8", function(err, data) {
    if(err) throw err;
    parser.parseString(data);
});