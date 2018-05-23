const texts= [...document.getElementsByTagName("li")];
const litext = texts.map(li => li.textContent);
const kidsOmmit = litext.shift();
const kidsOmmit1= litext.splice(2,1)
const kidsOmmit2= litext.splice(3,1)
const string = litext.toString();




class Speak {
    constructor(){
        this.synth = window.speechSynthesis;
        this.pitch = 1;
        this.rate = 1;
        this.voices=[];
        this.voice=0;
        this.populateVoiceList();
        return this;
    }
    populateVoiceList() {
        
        window.speechSynthesis.onvoiceschanged = function() {
          this.voices = this.synth.getVoices();
        }.bind(this);
        return this;
    }
    getVoices(output=false){
        if(!output){
            return this.voices;    
        }
        console.table(this.voices)
    }
    setVoice(index){
        this.voice=index;
        return this;
    }
    setPitch(pitch){
        this.pitch=pitch;
        return this;
    }
    setRate(rate){
        this.rate=rate;
        return this;
    }
    speak(what){
        let utterThis = new SpeechSynthesisUtterance(what);
        utterThis.voice = this.voices[this.voice];
        utterThis.pitch = this.pitch;
        utterThis.rate = this.rate;
        this.synth.speak(utterThis);
        return this;
    }
    

}




