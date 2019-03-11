export class SampleShellModel {
  image: string;
  title: string;
  description: string;
}

export class SampleShellListingModel {
  items: Array<SampleShellModel> = [
    new SampleShellModel(),
    new SampleShellModel(),
    new SampleShellModel()
  ];

  constructor(readonly isShell: boolean) { }
}
