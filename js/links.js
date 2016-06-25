  function getLink(type, id){
        	if(type == "inter"){
        		switch(id){
        			case "Sky Drifters":
        				return "Day0x";
        			case "Blacklance":
        				return "Ryulord";
        			case "Traders Of the Foundation":
        				return "BobioTheHobo";
        			case "RageQuit":
        				return "TimSoulSurfer";
        			case "The Anchors of Hummanity":
        				return "MeisterKeen";
        			case "The Spiders Nest":
        				return "TheRecluse";
        			case "Enkidu":
        				return "Enin";
        			case "Oblitus Est Spes":
        				return "JPB"
        			case "The Core Techs":
        				return "ThirtiethElement";
        			case "The Library":
        				return "Clingbeetle";
        			default:
        				return "404";
        		};
        	} else if(type = "external") {
        		switch(id){
        		        case "The Sky Drifters":
        				return "https://www.worldsadrift.com/alliances/sky-drifters/";
        			case "Blacklance":
        				return "https://www.worldsadrift.com/alliances/blackance/";
        			case "Traders Of the Foundation":
        				return "https://www.worldsadrift.com/alliances/traders-of-the-foundation/";
        			case "RageQuit":
        				return "https://www.worldsadrift.com/alliances/ragequit/";
        			case "The Anchors of Hummanity":
        				return "https://www.worldsadrift.com/alliances/the-harbormen/";
        			case "The Spiders Nest":
        				return "https://www.worldsadrift.com/alliances/the-spiders-nest/";
        			case "Enkidu":
        				return "https://www.worldsadrift.com/alliances/enkidu/";
        			case "Oblitus Est Spes":
        				return "https://www.worldsadrift.com/alliances/oblitus-est-spes/"
        			case "The Core Techs":
        				return "#404";
        			case "The Library":
        				return "https://www.worldsadrift.com/alliances/the-library/";
        			default:
        				return "#404";
        		};
        	};
        }
