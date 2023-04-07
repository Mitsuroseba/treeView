import React from 'react'

const TreeNode: React.FC<TreeNodeProps> = ({
  organization,
  onExpand,
  onExpandDeep,
  expandedNodes
}) => {
  const hasChildren = organization.subsidiaries.length > 0
  const isExpanded = expandedNodes.includes(organization.name)

  return (
        <li>
            <div onClick={() => { onExpand(organization.name) }} onDoubleClick={() => { onExpandDeep(organization) }}>
                {hasChildren && (
                    <span>{isExpanded ? '▼' : '►'}</span>
                )}
                {organization.name}
            </div>
            {isExpanded && hasChildren && (
                <ul>
                    {organization.subsidiaries?.map((subsidiary: OrganizationRender) => (
                        <TreeNode
                            key={subsidiary.name}
                            organization={subsidiary}
                            onExpand={onExpand}
                            onExpandDeep={onExpandDeep}
                            expandedNodes={expandedNodes}
                        />
                    ))}
                </ul>
            )}

        </li>
  )
}

export default TreeNode
