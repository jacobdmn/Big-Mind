import { CircleLoading } from "../Home/style/styledComponents";
import DoneIcon from "@mui/icons-material/Done";
export class handleLoadingAnimation {
  //// Typescripting all variables
  // [setLoading, contentDefault, setContentDefault, loadingWord, doneWord]
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  contentDefault: { label: string; icon: JSX.Element };
  setContentDefault: React.Dispatch<
    React.SetStateAction<{
      label: string;
      icon: JSX.Element;
    }>
  >;
  loadingWord: string;
  doneWord: string;

  //// Initialization
  constructor(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    contentDefault: { label: string; icon: JSX.Element },
    setContentDefault: React.Dispatch<
      React.SetStateAction<{
        label: string;
        icon: JSX.Element;
      }>
    >,
    loadingWord = "LOADING",
    doneWord = "DONE"
  ) {
    this.setLoading = setLoading;
    this.contentDefault = contentDefault;
    this.setContentDefault = setContentDefault;
    this.loadingWord = loadingWord;
    this.doneWord = doneWord;
  }

  /// Set LOADING icon
  setLoadingFunc = () => {
    this.setLoading(true);
    this.setContentDefault({
      label: this.loadingWord,
      icon: <CircleLoading />,
    });
  };

  /// set DONE icon
  setDoneFunc = () => {
    this.setContentDefault({
      label: this.doneWord,
      icon: <DoneIcon />,
    });
    setTimeout(() => {
      this.setContentDefault(this.contentDefault);
      this.setLoading(false);
    }, 500);
  };
}
