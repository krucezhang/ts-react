import * as React from 'react';
import { ComponentEx } from '@utils/reactExt';

@log
class Test extends ComponentEx{

    showMsg = () => {
        this.$message.success("this is a notification");
    }

    render = () => {
        return (
            <div>
                <div className="text">
                    Test Component
                </div>
                <button onClick={this.showMsg}>Theme</button>
            </div>
            
        )
    }
}

function log(target: any){
    console.log(target);
}

export default Test;