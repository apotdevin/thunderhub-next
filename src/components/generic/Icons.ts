import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import UpIcon from '../../assets/icons/arrow-up.svg';
import DownIcon from '../../assets/icons/arrow-down.svg';
import ZapIcon from '../../assets/icons/zap.svg';
import ZapOffIcon from '../../assets/icons/zap-off.svg';
import HelpIcon from '../../assets/icons/help-circle.svg';
import SunIcon from '../../assets/icons/sun.svg';
import MoonIcon from '../../assets/icons/moon.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeOffIcon from '../../assets/icons/eye-off.svg';
import ChevronsUpIcon from '../../assets/icons/chevrons-up.svg';
import ChevronsDownIcon from '../../assets/icons/chevrons-down.svg';
import ChevronLeftIcon from '../../assets/icons/chevron-left.svg';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg';
import ChevronUpIcon from '../../assets/icons/chevron-up.svg';
import ChevronDownIcon from '../../assets/icons/chevron-down.svg';
import HomeIcon from '../../assets/icons/home.svg';
import CpuIcon from '../../assets/icons/cpu.svg';
import SendIcon from '../../assets/icons/send.svg';
import ServerIcon from '../../assets/icons/server.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import EditIcon from '../../assets/icons/edit.svg';
import MoreVerticalIcon from '../../assets/icons/more-vertical.svg';
import AnchorIcon from '../../assets/icons/anchor.svg';
import PocketIcon from '../../assets/icons/pocket.svg';
import GlobeIcon from '../../assets/icons/globe.svg';
import XIcon from '../../assets/icons/x.svg';
import LayersIcon from '../../assets/icons/layers.svg';
import LoaderIcon from '../../assets/icons/loader.svg';
import CircleIcon from '../../assets/icons/circle.svg';
import AlertTriangleIcon from '../../assets/icons/alert-triangle.svg';
import AlertCircleIcon from '../../assets/icons/alert-circle.svg';
import GitCommitIcon from '../../assets/icons/git-commit.svg';
import GitBranchIcon from '../../assets/icons/git-branch.svg';
import RadioIcon from '../../assets/icons/radio.svg';
import CopyIcon from '../../assets/icons/copy.svg';
import ShieldIcon from '../../assets/icons/shield.svg';
import CrosshairIcon from '../../assets/icons/crosshair.svg';
import KeyIcon from '../../assets/icons/key.svg';
import SlidersIcon from '../../assets/icons/sliders.svg';
import UsersIcon from '../../assets/icons/users.svg';
import GitPullRequestIcon from '../../assets/icons/git-pull-request.svg';
import Link from '../../assets/icons/link.svg';
import Menu from '../../assets/icons/menu.svg';
import Mail from '../../assets/icons/mail.svg';
import Github from '../../assets/icons/github.svg';
import Repeat from '../../assets/icons/repeat.svg';
import CheckIcon from '../../assets/icons/check.svg';
import StarIcon from '../../assets/icons/star.svg';
import HalfStarIcon from '../../assets/icons/half-star.svg';
import CreditCardIcon from '../../assets/icons/credit-card.svg';

export interface IconProps {
  color?: string;
  size?: string;
  fillcolor?: string;
  strokeWidth?: string;
}

const GenericStyles = css`
  height: ${({ size }: IconProps) => (size ? size : '18px')};
  width: ${({ size }: IconProps) => (size ? size : '18px')};
  color: ${({ color }: IconProps) => (color ? color : '')};
  fill: ${({ fillcolor }: IconProps) => (fillcolor ? fillcolor : '')};
  stroke-width: ${({ strokeWidth }: IconProps) =>
    strokeWidth ? strokeWidth : '2px'};
`;

const styleIcon = (icon: FunctionComponent) =>
  styled(icon)`
    ${GenericStyles}
  `;

export const QuestionIcon = styleIcon(HelpIcon);
export const Zap = styleIcon(ZapIcon);
export const ZapOff = styleIcon(ZapOffIcon);
export const Anchor = styleIcon(AnchorIcon);
export const Pocket = styleIcon(PocketIcon);
export const Globe = styleIcon(GlobeIcon);
export const UpArrow = styleIcon(UpIcon);
export const DownArrow = styleIcon(DownIcon);
export const Sun = styleIcon(SunIcon);
export const Moon = styleIcon(MoonIcon);
export const Eye = styleIcon(EyeIcon);
export const EyeOff = styleIcon(EyeOffIcon);
export const ChevronsDown = styleIcon(ChevronsDownIcon);
export const ChevronsUp = styleIcon(ChevronsUpIcon);
export const ChevronLeft = styleIcon(ChevronLeftIcon);
export const ChevronRight = styleIcon(ChevronRightIcon);
export const ChevronUp = styleIcon(ChevronUpIcon);
export const ChevronDown = styleIcon(ChevronDownIcon);
export const Home = styleIcon(HomeIcon);
export const Cpu = styleIcon(CpuIcon);
export const Send = styleIcon(SendIcon);
export const Server = styleIcon(ServerIcon);
export const Settings = styleIcon(SettingsIcon);
export const Edit = styleIcon(EditIcon);
export const MoreVertical = styleIcon(MoreVerticalIcon);
export const XSvg = styleIcon(XIcon);
export const Layers = styleIcon(LayersIcon);
export const Loader = styleIcon(LoaderIcon);
export const Circle = styleIcon(CircleIcon);
export const AlertTriangle = styleIcon(AlertTriangleIcon);
export const AlertCircle = styleIcon(AlertCircleIcon);
export const GitCommit = styleIcon(GitCommitIcon);
export const GitBranch = styleIcon(GitBranchIcon);
export const Radio = styleIcon(RadioIcon);
export const Copy = styleIcon(CopyIcon);
export const Shield = styleIcon(ShieldIcon);
export const Crosshair = styleIcon(CrosshairIcon);
export const Key = styleIcon(KeyIcon);
export const Sliders = styleIcon(SlidersIcon);
export const Users = styleIcon(UsersIcon);
export const GitPullRequest = styleIcon(GitPullRequestIcon);
export const LinkIcon = styleIcon(Link);
export const MenuIcon = styleIcon(Menu);
export const MailIcon = styleIcon(Mail);
export const GithubIcon = styleIcon(Github);
export const RepeatIcon = styleIcon(Repeat);
export const Check = styleIcon(CheckIcon);
export const Star = styleIcon(StarIcon);
export const HalfStar = styleIcon(HalfStarIcon);
export const CreditCard = styleIcon(CreditCardIcon);
