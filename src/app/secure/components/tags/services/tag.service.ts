import { Injectable }    from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import '../../../../rxjs-extensions';

import { Tag } from '../model';

@Injectable()
export class TagService {
    constructor(private db: AngularFireDatabase) {
    }

    getTags(): Observable<Tag[]> {
        return this.db.list('/tags')
            .catch(error => {
                console.log(error);
                return Observable.of(null);
            });
    }

}
