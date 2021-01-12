class ActorModel{
    constructor(fname, lname, birthday, image, link){
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.image = image;
        this.link = link;
    }
    age(birthday){
        const today = new Date();
        const bday = new Date(birthday);
        const age = today.getFullYear() - bday.getFullYear();
        return age;
    };
}

export default ActorModel;