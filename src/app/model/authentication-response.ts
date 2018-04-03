export class AuthenticationResponse{
    private _token:string;

    get token(){
        return this._token;
    }

    set token(value){
        this._token=value;
    }
}