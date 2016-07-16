  function getLink(type, id){
        	if(type == "inter"){
        		switch(id){
        			case "Sky Drifters":
        				return "Day0x";
        			case "Traders Of the Foundation":
        				return "BobioTheHobo";
        			case "RageQuit":
        				return "TimSoulSurfer";
        			case "The Anchors of Hummanity":
        				return "MeisterKeen";
        			case "Enkidu":
        				return "Enin";
        			case "Oblitus Est Spes":
        				return "JPB"
        			case "The Library":
        				return "Clingbeetle";
        			case "Orchestra":
        			    return "Xerzie";
        			 case "The Sky Armada":
        			   return "SonofEarl";
        			 case "Wander":
        			   return "Moot";
        			 case "Timeless":
        			   return "Natony_123";
        			 case "Aviator Innovators":
        			   return "YakkoForever";
        			default:
        				return "404";
        		};
        	} else if(type = "external") {
        		switch(id){
        		        case "The Sky Drifters":
        				return "https://www.worldsadrift.com/alliances/sky-drifters/";
        			case "Traders Of the Foundation":
        				return "https://www.worldsadrift.com/alliances/traders-of-the-foundation/";
        			case "The Anchors of Hummanity":
        				return "https://www.worldsadrift.com/alliances/the-harbormen/";
        			case "Oblitus Est Spes":
        				return "https://www.worldsadrift.com/alliances/oblitus-est-spes/"
        			case "The Library":
        				return "https://www.worldsadrift.com/alliances/the-library/";
        				case "The Sky Armada":
        				  return "https://www.worldsadrift.com/alliances/the-glorious-sky-armada/";
        				case "Aviator Innovators":
        				  return "https://www.worldsadrift.com/alliances/aviator-innovators/";
        			default:
        				return "https://www.worldsadrift.com/alliances/"+id+"/";
        		};
        	};
        }
