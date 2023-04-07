
interface TreeNodeProps {
  organization: OrganizationRender
  onExpand: (nodeId: string) => void
  onExpandDeep: (organizationRender: OrganizationRender) => void
  expandedNodes: string[]
}
interface Organization {
  name: string
  country: string
  subsidiaries?: string[]
}
interface OrganizationRender {
  name: string
  country: string
  subsidiaries: OrganizationRender[]
}

interface OrganizationTreeState {
  status: AppStatus
  organizations: OrganizationRender[]
}
