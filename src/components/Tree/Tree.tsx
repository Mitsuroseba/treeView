import React, { useState } from 'react'
import {useAppSelector } from '../../app/hooks'
import TreeNode from './TreeNode'
import { selectOrganization } from '../../slices/organizationTreeSlice'
import './Tree.scss'

const Tree: React.FC = () => {
  const organizationRenders = useAppSelector(selectOrganization)
  const [expandedNodes, setExpandedNodes] = useState<string[]>([])

  const handleNodeExpand = (nodeName: string): void => {
    setExpandedNodes((prevExpandedNodes) => {
      if (prevExpandedNodes.includes(nodeName)) {
        return prevExpandedNodes.filter((id) => id !== nodeName)
      } else {
        return [...prevExpandedNodes, nodeName]
      }
    })
  }

  const handleNodeExpandDeep = (organization: OrganizationRender): void => {
    if (organization.subsidiaries != null) {
      const childrenIds = organization.subsidiaries.map((child) => child.name)
      setExpandedNodes((prevExpandedNodes) => {
        return [...prevExpandedNodes, ...childrenIds, organization.name]
      })
    }
  }

  const renderTree = (organizations: OrganizationRender[]): JSX.Element[] => {
    return organizations.map((organization) => (
            <TreeNode
                key={organization.name}
                organization={organization}
                onExpand={handleNodeExpand}
                onExpandDeep={handleNodeExpandDeep}
                expandedNodes={expandedNodes}
            />
    ))
  }

  return <div>
        <ul className="tree">{renderTree(organizationRenders)}</ul>
    </div>
}

export default Tree
