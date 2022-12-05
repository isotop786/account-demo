import React from 'react'
import { Tree } from 'antd'
const { TreeNode } = Tree

export const TreeComponet = ({ values }) => {
    console.log("tree comp value"+values);
    return (
        <Tree>
            {values.map((item,index) => {
                <TreeNode key={index} title={item.name}></TreeNode>
            })}
        </Tree>
    )
}