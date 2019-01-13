//  高阶组件，用来封装重复逻辑的函数
// 传入老组件，返回新组件

// 从里往外封装，从外往里执行 


export default function(OldComponent, name) {
    class NewComponent extends Compoent{
        render() {
            return <OldComponent/>
        }
    }
    // 返回新组件
    return NewComponent; 
}